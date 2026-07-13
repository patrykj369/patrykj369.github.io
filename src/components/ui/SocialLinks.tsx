import { AtSign, GitBranch, MessageCircle, Orbit } from "lucide-react";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import { ExternalLink } from "../common/ExternalLink";

export const SocialLinks = () => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3">
      <ExternalLink
        href={profile.githubUrl}
        aria-label={t("accessibility.github")}
        title={t("accessibility.github")}
        className="social-link"
      >
        <GitBranch size={18} aria-hidden="true" />
      </ExternalLink>
      <ExternalLink
        href={profile.linkedinUrl}
        aria-label={t("accessibility.linkedin")}
        title={t("accessibility.linkedin")}
        className="social-link"
      >
        <MessageCircle size={18} aria-hidden="true" />
      </ExternalLink>
      <ExternalLink
        href={profile.emailUrl}
        aria-label={t("accessibility.email")}
        title={t("accessibility.email")}
        className="social-link"
      >
        <AtSign size={18} aria-hidden="true" />
      </ExternalLink>
      <ExternalLink
        href={profile.orcidUrl}
        aria-label={t("accessibility.orcid")}
        title={t("accessibility.orcid")}
        className="social-link"
      >
        <Orbit size={18} aria-hidden="true" />
      </ExternalLink>
    </div>
  );
};
