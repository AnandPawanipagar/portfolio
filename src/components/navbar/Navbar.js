import React from "react";
import "./Navbar.scss";
import { motion } from "framer-motion";
import { Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ConsultentButton = styled(Button)({
  backgroundColor: "#ec5b53",
  color: "white",
});

const Navbar = () => {
  return (
    <>
      <Grid container spacing={0} className="navbarContainer">
        <Grid xs={4} className="navbarContainer--logoGrid">
          <img
            src="data:image/webp;base64,UklGRqAEAABXRUJQVlA4TJMEAAAv0gAMEH9kkG2kopzH+5PtIQQCSSj7qywlEEhxKDPsuJEkRdqqriH/DTx6ngHUpLZtG8ZtcsoduFYAQBgQMSAAggEwAIAACMAEcABMAIaJBWHCIBCEYUIARp9hgjggDoABYmLCABDoYRCAAACAIBCCgVgQAEEwEASA+wsEABAE8UYiEQgEHI5GI/HBC4lCopBIJOr1SgQSjRscDUcj4Gg4HIVGoeFwOKht26TIqV4cGtdI47HGFuIZ3CWuNcElCscNP47rf2aqq7siPV8j+g/BbSNHkozaUJfs6p5w+wR4+jLx+N04SkYv8jyfePwepaKpnGny6UeUhj6zKpnGs1zW1PPPKAFNMsql8TGP0vTLL0i5nuSxmk14Y3yCEdv46yuSrHe5To+QZP2h5G+kWNcf6OrObaRYb3WVf48k6zcl/4ZMWl9B81V1zrk9RjKy2TdYJVhjngN2NotGNguWjf2WwVUhGCJoQxX6xn1d3b2FgEhQuxjGXvDMNAt5nOSwmU8pI1lZ0Bw5/1VlgBvp3oNACIRsqEK/znX6EfEQ1flmmiUvA1aIGzAzh1TxV95sVKhC/6LkfxW0OSIMEVkhrpjRzB1VAwFzWqJD37ynq3s3o2i2ti5jBqRg1N3s2r2xSW6cc67bmxNrs815wWt75uS24ZW5Sre3ZTQoQr/SVf4zIvDyFVEvSOnrmIXwgLkvcZmReSaCIwoYucAWo47l2axBEfonJa8UVPw4TlxFUwx4IBg3m1OKyXQbQAqkIT70rbu6un9DQXsR2h9Ot2+rzjuQ5LgX5hIbONt1M48aokP/p6v8V8Tj2C8WjmrflhFG7YK7R0NWqOL5kE523gbUEB/6ByVvAN2P2cB+gegi4sdUEEXvAqclOvTtO7p6cF1JM+aMgSosJv7RVf47VAw46Uhr921VRdHtDHS4QnXSUejNnZ8mBjREh/5OyVusq40ic96tnBCYjByySoqbCWdO9beIw6gA0oWhXUN06Ie6mhhH/bUVYtKIHQYAe4ivkDCKbjGuFXzO1S+64D0JY6pTER36y8tZBY+BE3RYi7fpKLOAcQMR6ZuFc+ccILwdcAawGZuM6q5FE/pbYyaWd1g/RiPb9VRRQFkg7mZ2zzKHoD0UwoaPdfnCpAkN4PPzqZiaBBqJ6NxSNaiTw1yQ7zn8P7BnDjEX5BB1oj9Pgl1N6FVN26IbT4Ezhb9GPbDdQphKxP8h3ex6OHfAVIQM3RY6NKEdXTm4hX8y+nRS5hM2MoODG/TAOLaoA82WWQnE3cPOnnMIYJsH2Eo7AyWa0MsuE9HFAxGNKaCJu+/E3KjKGiwcGeljBcxP6OpRItbgJ8QPjycYz4Hz3orsQXp1lDydb9oIAOPvisZnbPHsdG1CerW6hyii8SdwgDnp24skaxfJOtu4ntu5VLhoMUi02iigsdNFYxsRXa1BsrW2nyjYOFV/lIYPLUfCtY+idHIrkq4lxyNe9e9fgsRry1CwWtci/XKBV907UQZadll6NXJkJcpB1aN+nduB0pB3PzbYsBTlIX4/1rEepaJdRL27UTZqPbYG6RcAAA=="
            alt="Portfolio"
          />
        </Grid>
        <Grid className="navbarContainer--tabsGrid" xs={8}>
          <Button className="navbarContainer--tabsGrid--tabs" variant="text">
            Home
          </Button>
          <Button className="navbarContainer--tabsGrid--tabs" variant="text">
            About
          </Button>
          <Button className="navbarContainer--tabsGrid--tabs" variant="text">
            Services
          </Button>
          <Button className="navbarContainer--tabsGrid--tabs" variant="text">
            Portfolio
          </Button>
          <Button className="navbarContainer--tabsGrid--tabs" variant="text">
            Page
          </Button>
          <Button className="navbarContainer--tabsGrid--tabs" variant="text">
            Contact
          </Button>
          <ConsultentButton
            component={motion.div}
            whileHover={{
              backgroundColor: "#ffd245",
            }}
            variant="contained"
            size="large"
          >
            Get Free Consultent
          </ConsultentButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
