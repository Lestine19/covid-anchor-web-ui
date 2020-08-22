import Link from "./Link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/stories">Stories</Link>
        <Link href="/">Covid Anchor</Link>
        <Link href="/cases">Cases</Link>
      </div>

      <style jsx>{`
        .navbar {
          height: 100%;
          width: 12rem;
          background-color: var(--color-primary);

          display: flex;
          justify-content: center;
          align-items: center;
        }

        .container {
          min-width: 38rem;
          display: flex;
          justify-content: space-between;
          transform: rotate(-90deg);
        }

        .navbar-link {
          color: var(--color-tertiary);
          font-family: Roboto;
          font-size: 16px;
          font-weight: 700;
          line-height: 19px;
          text-align: center;
        }

        .is-active {
          font-size: 1.8rem;
          color: var(--color-secondary);
          position: relative;
        }

        .is-active::before {
          content: "";
          height: 1rem;
          width: 1rem;
          background-color: var(--color-secondary);
          position: absolute;
          bottom: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
