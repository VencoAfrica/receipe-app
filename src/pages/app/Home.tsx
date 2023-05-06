import { ScrollView, Text, TextInput, View } from 'react-native';
import Container from '../../components/container';
import { useRecipes } from '../../hooks/recipes';
import { useEffect } from 'react';
import { Button } from '../../components/button';
import { COLORS } from '../../../utils/contants';
import { IconSearch, IconStar } from '../../components/icons';
import { LinearGradient } from 'expo-linear-gradient';
import { RecipeCardBordered, RecipeCardGradient, RecipeGrid, RecipeList } from '../../modules/recipes';

export default function Home() {
  const { data, load } = useRecipes();

  // useEffect(() => {
  //   load();
  // }, []);

  return (
    <ScrollView>
      <Container
        style={{ backgroundColor: COLORS.white, paddingHorizontal: 16 }}
      >
        <View style={{ gap: 32 }}>
          <View>
            <Text style={{ fontSize: 32, fontWeight: '600', marginBottom: 16 }}>
              Hello Jega
            </Text>
            <Text style={{ fontSize: 18 }}>What are you cooking today?</Text>
          </View>
          <View style={{ position: 'relative' }}>
            <TextInput
              style={{
                borderColor: COLORS.lightGray,
                borderRadius: 999,
                borderWidth: 1.5,
                height: 56,
                paddingLeft: 48,
              }}
            />
            <View style={{ position: 'absolute', top: 18, left: 20 }}>
              <IconSearch />
            </View>
          </View>

          <RecipeList title="Favorites" recipes={[]} />
          <RecipeGrid title="Recents" recipes={[]} />
        </View>
      </Container>
    </ScrollView>
  );
}
