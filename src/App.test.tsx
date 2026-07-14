import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import i18n, { resolveInitialLanguage } from "./i18n";
import enTranslations from "./i18n/locales/en.json";
import plTranslations from "./i18n/locales/pl.json";

const collectLeafPaths = (
  value: unknown,
  parentPath = "",
  output: string[] = [],
) => {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      collectLeafPaths(item, `${parentPath}[${index}]`, output);
    });
    return output;
  }

  if (value && typeof value === "object") {
    Object.entries(value as Record<string, unknown>).forEach(
      ([key, nested]) => {
        const nextPath = parentPath ? `${parentPath}.${key}` : key;
        collectLeafPaths(nested, nextPath, output);
      },
    );
    return output;
  }

  output.push(parentPath);
  return output;
};

describe("Portfolio app", () => {
  beforeEach(async () => {
    localStorage.clear();
    sessionStorage.clear();
    window.history.replaceState({}, "", "/?lang=pl");
    await i18n.changeLanguage("pl");
  });

  it("renders the Polish intro, progressbar, and no AWS branding", () => {
    render(<App />);

    expect(screen.getByText("Wdrażam portfolio")).toBeInTheDocument();
    expect(
      screen.getByText("Przygotowuję środowisko chmurowe"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("progressbar", {
        name: "Postęp uruchamiania portfolio",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/AWS/i)).not.toBeInTheDocument();
  });

  it("renders the English intro when language comes from the URL", async () => {
    window.history.replaceState({}, "", "/?lang=en");
    await i18n.changeLanguage("en");

    render(<App />);

    expect(screen.getByText("Deploying portfolio")).toBeInTheDocument();
    expect(
      screen.getByText("Preparing the cloud environment"),
    ).toBeInTheDocument();
  });

  it("skips the intro with the button and stores the session flag", async () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Pomiń intro" }));

    await waitFor(() => {
      expect(screen.queryByText("Wdrażam portfolio")).not.toBeInTheDocument();
      expect(sessionStorage.getItem("portfolio.intro.seen")).toBe("true");
    });
  });

  it("skips the intro on Escape and stores the session flag", async () => {
    render(<App />);

    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByText("Wdrażam portfolio")).not.toBeInTheDocument();
      expect(sessionStorage.getItem("portfolio.intro.seen")).toBe("true");
    });
  });

  it("does not render the intro again when the session flag is already set", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");

    render(<App />);

    expect(screen.queryByText("Uruchamiam portfolio")).not.toBeInTheDocument();
    expect(screen.queryByText("Wdrażam portfolio")).not.toBeInTheDocument();
  });

  it("renders in Polish by default and has required section ids", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Patryk Jabłoński" }),
    ).toBeInTheDocument();
    expect(document.getElementById("home")).toBeInTheDocument();
    expect(document.getElementById("about")).toBeInTheDocument();
    expect(document.getElementById("expertise")).toBeInTheDocument();
    expect(document.getElementById("experience")).toBeInTheDocument();
    expect(document.getElementById("credentials")).toBeInTheDocument();
    expect(document.getElementById("projects")).toBeInTheDocument();
    expect(document.getElementById("academic")).toBeInTheDocument();
    expect(document.getElementById("contact")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Projekty" }),
    ).toBeInTheDocument();
  });

  it("switches language and updates html lang and url param", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    fireEvent.click(screen.getAllByRole("button", { name: "EN" })[0]);

    expect(
      await screen.findByRole("heading", {
        name: "Projects",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Contact me" }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("en");
    expect(window.location.search).toContain("lang=en");

    fireEvent.click(screen.getAllByRole("button", { name: "PL" })[0]);
    expect(
      await screen.findByRole("heading", {
        name: "Projekty",
      }),
    ).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("pl");
  });

  it("renders localized hero contact CTA and points it to #contact", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const plHeroContact = screen.getByRole("link", {
      name: "Napisz do mnie",
    });
    expect(plHeroContact).toHaveAttribute("href", "#contact");
    expect(plHeroContact).not.toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/patryk-jablonski",
    );

    fireEvent.click(screen.getAllByRole("button", { name: "EN" })[0]);

    const enHeroContact = await screen.findByRole("link", {
      name: "Contact me",
    });
    expect(enHeroContact).toHaveAttribute("href", "#contact");
  });

  it("stores language selection in localStorage", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);
    fireEvent.click(screen.getAllByRole("button", { name: "EN" })[0]);

    await waitFor(() => {
      expect(localStorage.getItem("portfolio.language")).toBe("en");
    });
  });

  it("has LinkedIn, repository, and email links, and no tel links", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const links = screen.getAllByRole("link");
    const hrefs = links.map((link) => link.getAttribute("href"));

    expect(hrefs).toContain("https://www.linkedin.com/in/patryk-jablonski");
    expect(hrefs).toContain(
      "https://github.com/patrykj369/azure-terraform-docker-guestbook",
    );
    expect(hrefs).toContain(
      "https://github.com/patrykj369/zis-azure-terraform",
    );
    expect(hrefs).toContain("mailto:contact@patrykjablonski.cloud");
    expect(hrefs.some((href) => href?.startsWith("tel:"))).toBe(false);
  });

  it("renders contact email button in PL and EN with exact mailto address", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const plEmailButton = screen.getByRole("link", {
      name: "Wyślij do mnie e-mail",
    });
    expect(plEmailButton).toHaveAttribute(
      "href",
      "mailto:contact@patrykjablonski.cloud",
    );

    fireEvent.click(screen.getAllByRole("button", { name: "EN" })[0]);

    const enEmailButton = await screen.findByRole("link", {
      name: "Send me an email",
    });
    expect(enEmailButton).toHaveAttribute(
      "href",
      "mailto:contact@patrykjablonski.cloud",
    );
  });

  it("renders four social icons in home and footer", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    const { container } = render(<App />);

    expect(container.querySelectorAll("#home a.social-link")).toHaveLength(4);
    expect(container.querySelectorAll("footer a.social-link")).toHaveLength(4);
  });

  it("updates translated email icon labels and titles when switching language", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const plEmailIcons = screen.getAllByRole("link", {
      name: "Mail",
    });
    expect(plEmailIcons).toHaveLength(2);
    plEmailIcons.forEach((icon) => {
      expect(icon).toHaveAttribute("title", "Mail");
      expect(icon).toHaveAttribute(
        "href",
        "mailto:contact@patrykjablonski.cloud",
      );
    });

    fireEvent.click(screen.getAllByRole("button", { name: "EN" })[0]);

    const enEmailIcons = await screen.findAllByRole("link", {
      name: "Mail",
    });
    expect(enEmailIcons).toHaveLength(2);
    enEmailIcons.forEach((icon) => {
      expect(icon).toHaveAttribute("title", "Mail");
      expect(icon).toHaveAttribute(
        "href",
        "mailto:contact@patrykjablonski.cloud",
      );
    });
  });

  it("resolves initial language from URL first", () => {
    window.history.replaceState({}, "", "/?lang=en");
    expect(resolveInitialLanguage()).toBe("en");
  });

  it("does not contain phone-like text in translations", () => {
    const plBundle = JSON.stringify(
      i18n.getResourceBundle("pl", "translation"),
    );
    const enBundle = JSON.stringify(
      i18n.getResourceBundle("en", "translation"),
    );
    const phoneRegex = /\+?\d[\d\s().-]{6,}/;

    expect(phoneRegex.test(plBundle)).toBe(false);
    expect(phoneRegex.test(enBundle)).toBe(false);
  });

  it("toggles mobile menu aria-expanded state", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);
    const menuButton = screen.getByRole("button", { name: "Otwórz menu" });

    expect(menuButton).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute("aria-expanded", "true");
  });

  it("renders credentials and grouped courses", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: "Certyfikaty i ukończone kursy",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Cisco Certified Network Associate (CCNA)"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("MTA 98-381: Introduction to Programming Using Python"),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText("Chmura, DevOps i systemy operacyjne").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Bazy danych i analityka").length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByText("Automatyzacja procesów").length,
    ).toBeGreaterThan(0);
  });

  it("keeps the project gallery collapsed by default and toggles aria-expanded", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const galleryButton = screen.getAllByRole("button", {
      name: "Galeria projektu",
    })[0];

    expect(galleryButton).toHaveAttribute("aria-expanded", "false");
    expect(
      screen.queryAllByRole("button", { name: "Powiększ grafikę" }),
    ).toHaveLength(0);

    fireEvent.click(galleryButton);

    expect(galleryButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getAllByRole("button", { name: "Powiększ grafikę" }),
    ).toHaveLength(4);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Ukryj galerię" })[0],
    );

    expect(
      screen.getAllByRole("button", { name: "Galeria projektu" })[0],
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("opens modal through portal and closes on Escape with focus return", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Galeria projektu" })[0],
    );
    const imageButtons = screen.getAllByRole("button", {
      name: "Powiększ grafikę",
    });

    fireEvent.click(imageButtons[0]);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog.parentElement).toBe(document.body);
    fireEvent.keyDown(window, { key: "Escape" });

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
      expect(imageButtons[0]).toHaveFocus();
    });
  });

  it("closes modal by close button, backdrop, and enlarged image click", async () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Galeria projektu" })[0],
    );
    const imageButtons = screen.getAllByRole("button", {
      name: "Powiększ grafikę",
    });

    fireEvent.click(imageButtons[0]);
    const closeButtons = screen.getAllByRole("button", {
      name: "Zamknij podgląd",
    });
    fireEvent.click(
      closeButtons.find((button) =>
        button.className.includes("fixed right-4 top-4"),
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    fireEvent.click(imageButtons[0]);
    fireEvent.click(
      document.querySelector(
        '[role="dialog"] > button.relative.z-\\[10001\\]',
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    fireEvent.click(imageButtons[0]);
    fireEvent.click(
      document.querySelector(
        '[role="dialog"] > button.absolute.inset-0',
      ) as HTMLElement,
    );
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("renders the second project gallery and removes the old pipeline", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(
      screen.getAllByRole("button", { name: "Galeria projektu" }),
    ).toHaveLength(2);

    fireEvent.click(
      screen.getAllByRole("button", { name: "Galeria projektu" })[1],
    );

    expect(
      screen.getByAltText(
        "Przegląd architektury projektu Azure Network Infrastructure Lab",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        "Widok wdrożenia infrastruktury w projekcie Azure Network Infrastructure Lab",
      ),
    ).toBeInTheDocument();
    expect(screen.queryByText("Kod")).not.toBeInTheDocument();
  });

  it("renders all experience tag groups and the simplified footer", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(screen.getAllByText("Generative AI").length).toBeGreaterThan(0);
    expect(screen.getAllByText("OWASP testing").length).toBeGreaterThan(0);
    expect(screen.getByText("© 2026 Patryk Jabłoński")).toBeInTheDocument();
    expect(screen.queryByText(/React/i)).not.toBeInTheDocument();
  });

  it("renders ten hero technologies", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const technologyNames = [
      "Microsoft Azure",
      "Docker",
      "CI/CD",
      "Terraform",
      "Ansible",
      "PowerShell",
      "Bash",
      "Grafana",
      "Prometheus",
      "Git",
    ];

    technologyNames.forEach((technology) => {
      expect(screen.getAllByText(technology).length).toBeGreaterThan(0);
    });
  });

  it("renders exactly three hero orbit rings", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(screen.getAllByTestId("hero-orbit-ring")).toHaveLength(3);
  });

  it("uses equal desktop layout for expertise and single-column layout for experience cards", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    const { container } = render(<App />);

    const expertiseGrid = container.querySelector(
      "#expertise .grid.items-stretch",
    );
    const experienceGrid = container.querySelector("#experience .grid.gap-4");

    expect(expertiseGrid?.className).toContain("md:auto-rows-fr");
    expect(experienceGrid?.className).not.toContain("md:grid-cols-3");
    expect(experienceGrid?.className).not.toContain("md:auto-rows-fr");

    const expertiseCards = container.querySelectorAll(
      "#expertise .group\\/card.flex.h-full.flex-col",
    );
    const experienceCards = container.querySelectorAll(
      "#experience .group\\/card.flex.flex-col.h-full",
    );

    expect(expertiseCards.length).toBeGreaterThan(0);
    expect(experienceCards.length).toBeGreaterThan(0);
  });

  it("renders certification and course links from data with secure target attributes", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const certLink = screen.getByRole("link", {
      name: /Otwórz certyfikat MTA 98-361: Software Development Fundamentals/i,
    });
    const courseLink = screen.getByRole("link", {
      name: /Otwórz kurs AZ-104: Azure Administrator, Network, Monitoring, DR/i,
    });

    [certLink, courseLink].forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
      expect(link.className).toContain("cursor-pointer");
    });
  });

  it("keeps PL and EN translation key paths synchronized", () => {
    const plPaths = collectLeafPaths(plTranslations).sort();
    const enPaths = collectLeafPaths(enTranslations).sort();

    expect(plPaths).toEqual(enPaths);
  });

  it("does not render en dash or em dash characters in visible text", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    const { container } = render(<App />);
    const visibleText = container.textContent ?? "";

    expect(visibleText).not.toMatch(/[—–]/);
  });

  it("marks the hero orbit as reduced motion and skips the intro when the media query requests it", async () => {
    const originalMatchMedia = window.matchMedia;

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        onchange: null,
        addEventListener: () => undefined,
        removeEventListener: () => undefined,
        addListener: () => undefined,
        removeListener: () => undefined,
        dispatchEvent: () => false,
      }),
    });

    render(<App />);

    await waitFor(() => {
      expect(
        document.querySelector('[data-reduced-motion="true"]'),
      ).toBeInTheDocument();
      expect(screen.queryByText("Wdrażam portfolio")).not.toBeInTheDocument();
    });

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: originalMatchMedia,
    });
  });

  it("applies pointer cursor classes to the language buttons", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    const languageButtons = screen.getAllByRole("button", { name: /PL|EN/ });

    languageButtons.forEach((button) => {
      expect(button.className).toContain("cursor-pointer");
    });
  });

  it("does not reference the legacy TechnologyOrbit component in the rendered app", () => {
    sessionStorage.setItem("portfolio.intro.seen", "true");
    render(<App />);

    expect(screen.queryByText("TechnologyOrbit")).not.toBeInTheDocument();
  });
});
