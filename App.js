import React from "react"
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Switch,
} from "react-native";
import { useState } from "react";
import Home from "./Home";
import NavMenu from "./NavMenu";
import Jokes from "./Jokes";

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [themeMode, setThemeMode] = useState({
    bg: "black",
    navBg: "#181818",
    tx: "white",
    statusBar: "light",
  });
  const [page, setPage] = useState("Home");
  function pageName(page) {
    switch (page) {
      case "Home":
        return <Home tx={themeMode.tx} />;
      case "Nav":
        return (
          <NavMenu
            tx={themeMode.tx}
            navBg={themeMode.navBg}
            setThemeMode={setThemeMode}
            setPage={setPage}
            page={page}
            navOpen={navOpen}
            setNavOpen={setNavOpen}
          />
        );
      case "Jokes":
        return <Jokes tx={themeMode.tx} />;
      default:
        break;
    }
  }
  return (
    <View
      style={{ flex: 1, backgroundColor: themeMode.bg, alignItems: "center" }}
    >
      <StatusBar style={themeMode.statusBar} />
      {pageName(page)}
      <BottomNav
        setPage={setPage}
        navBg={themeMode.navBg}
        bg={themeMode.bg}
        tx={themeMode.tx}
        page={page}
        navOpen={navOpen}
        setNavOpen={setNavOpen}
      />
    </View>
  );
}

function BottomNav(props) {
  return (
    <View
      style={{
        margin: 5,
        backgroundColor: props.navBg,
        padding: 10,
        width: "95%",
        height: 70,
        borderRadius: 20,
        flexDirection: "row",
      }}
    >
      {props.navOpen ? (
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 15,
          }}
          onPress={() => {
            props.setNavOpen(false);
            props.setPage("Home");
          }}
        >
          <Text
            adjustsFontSizeToFit={true}
            style={{
              margin: "auto",
              color: "black",
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 42,
              fontWeight: "bold",
            }}
          >
            ❌
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: "#00CCFF",
            width: 50,
            height: 50,
            borderRadius: 15,
          }}
          onPress={() => {
            props.setNavOpen(true);
            props.setPage("Nav");
          }}
        >
          <Text
            adjustsFontSizeToFit={true}
            style={{
              textAlignVertical: "center",
              textAlign: "center",
              color: "black",
              fontSize: 37,
              fontWeight: "bold",
            }}
          >
            ≡
          </Text>
        </TouchableOpacity>
      )}
      {props.page === "Home" || props.page === "Nav" ? (
        <></>
      ) : (
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            borderRadius: 15,
            backgroundColor: "#00CCFF",
            marginLeft: 10,
          }}
          onPress={() => {
            props.setNavOpen(false);
            props.setPage("Home");
          }}
        >
          <Text
            adjustsFontSizeToFit={true}
            style={{
              margin: "auto",
              color: "black",
              textAlignVertical: "center",
              textAlign: "center",
              fontSize: 40,
              fontWeight: "bold",
            }}
          >
            ⌂
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

//   render() {
//     return (
//       <ThemeProvider theme={theme}>
//         <Container>
//           <div style={{ padding: 30 }}>
//             <img style={{ width: 200 }} src={ReactLogo}></img>
//             <h1>Hello!</h1>
//             <Title />
//             <p>This is my first React app</p>
//             <div>
//               {this.state.displayBio ? (
//                 <div>
//                   <p>I think its pretty good</p>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     color="primary"
//                     onClick={() => {
//                       this.setState({
//                         displayBio: false,
//                         opacity1: 1,
//                         appOpacity: 1,
//                       });
//                     }}
//                   >
//                     Show Less
//                   </Button>
//                 </div>
//               ) : (
//                 <div>
//                   <Button
//                     variant="contained"
//                     size="small"
//                     color="primary"
//                     onClick={() => {
//                       this.setState({ opacity1: 0, appOpacity: 0 });
//                       this.setState({
//                         displayBio: true,
//                         opacity2: 1,
//                         appOpacity: 1,
//                       });
//                     }}
//                   >
//                     Show More
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>
//           {/* <div style={{ padding: 20 }}>{<Pictures></Pictures>}</div> */}

//           <div style={{ padding: 20 }}>
//             <SocialProfiles></SocialProfiles>
//           </div>
//         </Container>
//       </ThemeProvider>
//     );
//   }
// }

// export default App;
