import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const removeTodo = (todo) => {
    todos.splice(todo, 1);
    setTodos([...todos]);
  };

  const handleTodo = ({ item, index }) => (
    <View style={styles.containerTodo}>
      <Text key={index} style={styles.todo}>
        {item}
      </Text>

      <TouchableOpacity onPress={(todo) => removeTodo(todo)}>
        <Text style={styles.btnRemoveTodo}> - </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gerenciador de tarefas</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
          style={styles.input}
          onChangeText={(text) => setTodo(text)}
          value={todo}
        />
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.btn}>
            <Text style={styles.btnAdd}>+</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.listTodos}>
        <FlatList
          data={todos}
          keyExtractor={(item, index) => item}
          renderItem={handleTodo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  title: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  header: {
    padding: 15,
    alignItems: "center",
  },
  btn: {
    borderRadius: 5,
    borderColor: "#FFF",
    color: "gray",
  },
  btnAdd: {
    fontSize: 50,
    color: "#FFF",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    fontSize: 20,
    borderRadius: 5,
    borderColor: "#010101",
    backgroundColor: "#FFF",
    marginRight: 15,
    width: Dimensions.get("screen").width / 1.5,
  },

  todo: {
    flex: 1,
    borderWidth: 3,
    borderColor: "#dcdcdc",
    marginTop: 10,
    borderRadius: 5,
    fontSize: 25,
    color: "#FFF",
    textAlign: "center",
    marginRight: 15,
  },

  listTodos: {
    alignItems: "stretch",
    paddingHorizontal: 15,
  },
  containerTodo: {
    flexDirection: "row",
    alignItems: "center",
  },

  btnRemoveTodo: {
    display: "flex",
    alignItems: "center",
    fontSize: 30,
    color: "#010101",
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
});
export default Todo;
