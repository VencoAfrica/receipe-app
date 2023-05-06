import { Text, TextInput, View } from 'react-native';
import Container from '../../components/container';
import { useRecipes } from '../../hooks/recipes';
import { useEffect } from 'react';

export default function Recipes() {
  const { data, query, load, setQuery } = useRecipes();

  // useEffect(() => {
  //   load();
  // }, []);

  return (
    <Container>
      {/* Search */}
      <View>
        <TextInput />
      </View>
      {/* Results */}
      <View></View>
      {/* Pagination */}
    </Container>
  );
}
