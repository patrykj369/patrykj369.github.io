import { useTranslation } from "react-i18next";
import { m } from "motion/react";
import { Container } from "../components/common/Container";
import { getInteractiveCardClasses } from "../components/common/interactiveCardStyles";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { certifications, courseCategories } from "../data/credentials";

export const CredentialsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal
      id="credentials"
      className="py-16 md:py-24"
      variant="credentials"
    >
      <Container>
        <SectionHeading
          title={t("credentials.title")}
          subtitle={t("credentials.subtitle")}
          eyebrow="04"
        />

        <h3 className="mb-4 text-xl font-semibold text-[var(--color-text)]">
          {t("credentials.certificationsTitle")}
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:[grid-auto-rows:1fr] lg:[grid-template-columns:repeat(5,minmax(0,1fr))]">
          {certifications.map((certification, index) => (
            <m.div
              key={certification.id}
              className="h-full"
              initial={{ opacity: 0, scale: 0.98, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.36,
                ease: "easeOut",
                delay: index * 0.05,
              }}
            >
              {certification.url ? (
                <a
                  href={certification.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t("credentials.certificationLinkLabel", {
                    name: certification.name,
                  })}
                  className={getInteractiveCardClasses(
                    "credentials",
                    "flex h-full cursor-pointer flex-col rounded-2xl p-4",
                  )}
                >
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {certification.name}
                  </h3>
                  {certification.provider ? (
                    <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                      {certification.provider}
                    </p>
                  ) : null}
                </a>
              ) : (
                <article
                  className={getInteractiveCardClasses(
                    "credentials",
                    "flex h-full flex-col rounded-2xl p-4",
                  )}
                >
                  <h3 className="text-base font-semibold text-[var(--color-text)]">
                    {certification.name}
                  </h3>
                  {certification.provider ? (
                    <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                      {certification.provider}
                    </p>
                  ) : null}
                </article>
              )}
            </m.div>
          ))}
        </div>

        <h3 className="mt-8 text-xl font-semibold text-[var(--color-text)]">
          {t("credentials.courses.title")}
        </h3>
        <div className="mt-8 grid gap-4">
          {courseCategories.map((category) => (
            <details
              key={category.id}
              className={getInteractiveCardClasses(
                "courses",
                "group rounded-2xl px-5 py-4",
              )}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left marker:content-none">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text)] transition duration-200 [@media(hover:hover)_and_(pointer:fine)]:group-hover/card:translate-x-[2px]">
                    {t(category.titleKey)}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {t("credentials.courses.itemsCount", {
                      count: category.courses.length,
                    })}
                  </p>
                </div>
                <span
                  className="text-xl text-[var(--color-cyan)] transition duration-200 group-open:rotate-45 [@media(hover:hover)_and_(pointer:fine)]:group-hover/card:translate-x-[2px]"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <ul className="mt-4 grid gap-3 border-t border-[var(--color-border)] pt-4 text-sm text-[var(--color-text-muted)]">
                {category.courses.map((course) => (
                  <li key={course.id}>
                    {course.url ? (
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("credentials.courseLinkLabel", {
                          name: course.name,
                        })}
                        className="group/course block cursor-pointer rounded-xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] px-3 py-3 transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[2px] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[var(--color-border-active)] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[color-mix(in_srgb,var(--color-surface-strong)_86%,transparent)] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_10px_24px_rgba(47,140,255,0.18)]"
                      >
                        <p className="text-[var(--color-text)]">
                          {course.name}
                        </p>
                        <p className="mt-1 text-xs text-[var(--color-text-subtle)]">
                          {course.provider}
                        </p>
                      </a>
                    ) : (
                      <article className="group/course rounded-xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_88%,transparent)] px-3 py-3 transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[2px] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[var(--color-border-active)] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[color-mix(in_srgb,var(--color-surface-strong)_86%,transparent)] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_10px_24px_rgba(47,140,255,0.18)]">
                        <p className="text-[var(--color-text)]">
                          {course.name}
                        </p>
                        <p className="mt-1 text-xs text-[var(--color-text-subtle)]">
                          {course.provider}
                        </p>
                      </article>
                    )}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
};
