export interface FooterSection {
  title: string;
  items: string[];
}

export interface FooterContainer {
  container: {
    footer: FooterSection[];
    copyright: Copyright;
  };
}
 export interface Copyright {
  text: string;
  link: string;
  href: string;
}
