import React from "react";
import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Jokes(props) {
  const [joke, setJoke] = useState({});
  const [jokes, setJokes] = useState([]);
  const Joke = ({ setup, delivery, id }) => (
    <View key={id} style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, color: props.tx, textAlign: "center" }}>
        {setup}
      </Text>
      <Text
        style={{
          marginTop: 10,
          fontSize: 20,
          color: props.tx,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {delivery}
      </Text>
    </View>
  );
  useEffect(() => {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart"
    )
      .then((response) => response.json())
      .then((json) => setJoke(json));
  }, []);
  const fetchJokes = () => {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart&amount=100"
    )
      .then((response) => response.json())
      .then((json) => setJokes(json.jokes));
  };
  return (
    <View
      style={{
        paddingVertical: "20%",
        flex: 1,
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text style={{ color: props.tx, fontWeight: "bold", fontSize: 30 }}>
        Here is a Joke!
      </Text>
      {Joke(joke)}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#00CCFF",
          width: 200,
          padding: 10,
          borderRadius: 15,
          alignSelf: "center",
        }}
        onPress={fetchJokes}
      >
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          Want More?
        </Text>
      </TouchableOpacity>
      {/* <ScrollView style={{ marginTop: 10}}>
        {jokes ? (
          jokes.map((joke) => <Joke key={joke.id} joke={joke} />)
        ) : (
          <></>
        )}
      </ScrollView> */}
      {jokes ? (
        <FlatList
          data={jokes}
          renderItem={Joke}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <></>
      )}
    </View>
  );
}

// const Joke = ({ joke: { setup, delivery, id } }) => (
//     <p key={id} style={{color: "white"}}>
//       {setup} <br></br> <b>{delivery}</b>
//     </p>
//   );

//   class Jokes extends Component {
//     state = { joke: {}, jokes: [] };

//     componentDidMount() {
//       fetch(
//         "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart"
//       )
//         .then((response) => response.json())
//         .then((json) => this.setState({ joke: json }));
//     }

//     fetchJokes = () => {
//       fetch(
//         "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=twopart&amount=10"
//       )
//         .then((response) => response.json())
//         .then((json) => this.setState({ jokes: json.jokes }));
//     };

//     render() {
//       return (
//         <ThemeProvider theme={theme}>
//           <Container>
//             <div className="jokes">
//               <h1>Here is a Joke!</h1>
//               <Joke joke={this.state.joke} />
//               <Divider />
//               <div className="jokesButton">
//                 <h2>Want more?</h2>
//                 <Button
//                   onClick={this.fetchJokes}
//                   variant="contained"
//                   color="primary"
//                   size="small"
//                 >
//                   Bring The Jokes!
//                 </Button>
//                 {this.state.jokes.map((joke) => (
//                   <Joke key={joke.id} joke={joke} />
//                 ))}
//               </div>
//             </div>
//           </Container>
//         </ThemeProvider>
//       );
//     }
//   }
