type Site = {
  name: string,
  logo: Logo,
};

type Logo = {
    image: Image,
}

type Image = {
    height: number,
    url: string,
}

export default Site;