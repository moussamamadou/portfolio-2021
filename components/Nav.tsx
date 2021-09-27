const Nav = ({ data }: any) => {
  return (
    <nav>
      <div className="logo">{data.logo}</div>
      <div className="nav">
        <div className="links">
          <a href="#work">{data.linkFirst}</a>
          <a href="#about">{data.linkSecond}</a>
          <a href="#contact">{data.linkThird}</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
