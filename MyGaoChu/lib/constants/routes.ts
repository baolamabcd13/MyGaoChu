export const ROUTES = {
  HOME: "/",
  ABOUT: {
    ROOT: "/about",
    INTRODUCTION: "/about",
    HISTORY: "/about/history",
    ACHIEVEMENTS: "/about/achievements",
    COMMUNITY: "/about/community",
  },
  PRODUCTS: {
    ROOT: "/products/mi",
    NHAPKHAU: "/products/nhapkhau",
    GIAVI: "/products/giavi",
    MI: "/products/mi",
    GAO: "/products/gao",
  },
  NEWS: {
    EVENTS: "/news/events",
    PROMOTIONS: "/news/promotions",
  },
  GALLERY: {
    IMAGES: "/gallery/images",
    VIDEOS: "/gallery/videos",
  },
  FOOD_SAFETY: {
    POLICY: "/food-safety/policy",
    CERTIFICATION: "/food-safety/certification",
  },
  CONTACT: {
    INFO: "/contact-info",
  },
} as const;
