export interface EducationItem {
  id: string;
  titleKey: string;
  institutionKey: string;
  periodKey: string;
}

export const educationItems: EducationItem[] = [
  {
    id: "phd",
    titleKey: "academic.education.items.phd.title",
    institutionKey: "academic.education.items.phd.institution",
    periodKey: "academic.education.items.phd.period",
  },
  {
    id: "postgraduate",
    titleKey: "academic.education.items.postgraduate.title",
    institutionKey: "academic.education.items.postgraduate.institution",
    periodKey: "academic.education.items.postgraduate.period",
  },
  {
    id: "mba",
    titleKey: "academic.education.items.mba.title",
    institutionKey: "academic.education.items.mba.institution",
    periodKey: "academic.education.items.mba.period",
  },
  {
    id: "master",
    titleKey: "academic.education.items.master.title",
    institutionKey: "academic.education.items.master.institution",
    periodKey: "academic.education.items.master.period",
  },
  {
    id: "engineer",
    titleKey: "academic.education.items.engineer.title",
    institutionKey: "academic.education.items.engineer.institution",
    periodKey: "academic.education.items.engineer.period",
  },
];
