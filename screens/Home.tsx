import * as React from "react";
import { Text, View } from "react-native";
import { Category, Transaction } from "../types";
import { useSQLiteContext } from "expo-sqlite/next";

export default function Home() {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);

  const db = useSQLiteContext();

  React.useEffect(() => {
    db.withTransactionAsync(async () => {
      await getData();
    });
  }, [db]);

  async function getData() {
    console.log("HOME > getting data...");
    try {
      const result = await db.getAllAsync("SELECT * FROM Transactions");
      // setCategories(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View>
      <Text>Home screen!</Text>
    </View>
  );
}
