import Logo from "../assets/react.svg";

const Header = ({ children }: { children: React.ReactNode }) => (
  <header>
    <img src={Logo} alt="Logo" />
    <div className="actions">{children}</div>
  </header>
);

const HomePage = () => (
  <>
    <Header>
      <a href="/dashboard">Go to dashboard</a>
    </Header>
    <div>OtherHomeStuff</div>
  </>
);

const DashboardPage = () => (
  <>
    <Header>
      <a href="/events/new">Create event</a>
    </Header>
    <div>OtherDashboardStuff</div>
  </>
);

export { HomePage, DashboardPage };
