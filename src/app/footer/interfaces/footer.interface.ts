export interface FooterSection {
  title: string;
  items: string[];
}

export interface FooterContainer {
  container: {
    footer: FooterSection[];
    copyright: {
      text: string;
      link: string;
      href: string;
    };
  };
}
