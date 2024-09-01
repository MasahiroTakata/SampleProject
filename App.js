import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles/AppStyles';

export default function App() {
	const [task, setTask] = useState(''); // テキストボックス用
  const [tasks, setTasks] = useState([]); // 入力したタスクを保存する用
  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask(''); // 入力値を空にする
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
			<TextInput
	      placeholder="Add new task"
	      value={task}
	      onChangeText={setTask}
	      style={styles.input}
			/>
			<TouchableOpacity style={styles.button} onPress={addTask} title="Add Task">
				<Text style={styles.buttonText}>Add Task</Text>
			</TouchableOpacity>
			<FlatList
	      data={tasks}
	      renderItem={({ item }) => <Text style={styles.task}>{item.value}</Text>}
      />
    </View>
  );
}
