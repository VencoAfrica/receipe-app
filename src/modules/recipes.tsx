import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';
import { COLORS } from '../../utils/contants';
import { IconStar } from '../components/icons';

export const RecipeCardGradient = () => {
  return (
    <View style={{ height: 200 }}>
      <LinearGradient
        colors={['rgba(0,0,0,.15)', 'rgba(0,0,0,.95)']}
        style={{
          borderRadius: 10,
          flex: 1,
          justifyContent: 'space-between',
          padding: 16,
        }}
      >
        <View style={{ alignItems: 'flex-end' }}>
          <View
            style={{
              alignItems: 'center',
              backgroundColor: COLORS.secondaryLight,
              borderRadius: 10,
              flexDirection: 'row',
              gap: 4,
              paddingHorizontal: 6,
              paddingVertical: 4,
            }}
          >
            <IconStar />
            <Text style={{ fontSize: 8, fontWeight: '600' }}>4.6</Text>
          </View>
        </View>
        <View style={{}}>
          <Text
            style={{
              color: COLORS.white,
              fontWeight: '600',
              marginBottom: 10,
            }}
          >
            Lamb chops with fruity couscous and mint
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 11,
              fontWeight: '300',
            }}
          >
            Recipe Name
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export const RecipeCardBordered = () => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderColor: COLORS.lightGray,
        borderWidth: 1,
        borderRadius: 10,
        height: 300,
        justifyContent: 'flex-end',
        padding: 16,
        width: '100%',
      }}
    >
      <View>
        <View
          style={{
            alignSelf: 'flex-start',
            alignItems: 'center',
            backgroundColor: COLORS.secondaryLight,
            borderRadius: 10,
            flexDirection: 'row',
            gap: 4,
            paddingHorizontal: 6,
            paddingVertical: 4,
          }}
        >
          <IconStar />
          <Text style={{ fontSize: 8, fontWeight: '600' }}>4.6</Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 8,
          }}
        >
          Lamb chops with fruity couscous and mint
        </Text>
        <Text
          style={{
            color: COLORS.secondary,
            fontSize: 14,
            fontWeight: '300',
          }}
        >
          Recipe Name
        </Text>
      </View>
    </View>
  );
};

export const RecipeGrid: React.FC<RecipeListProps> = ({ recipes, title }) => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 16 }}>
          {title}
        </Text>
        <Text style={{ color: COLORS.secondary, fontWeight: '600' }}>
          View All
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: 16,
        }}
      >
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <View key={i} style={{ width: '48%' }}>
              <RecipeCardGradient />
            </View>
          ))}
      </View>
    </View>
  );
};

export const RecipeList: React.FC<RecipeListProps> = ({ recipes, title }) => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '600', marginBottom: 16 }}>
          {title}
        </Text>
        <Text style={{ color: COLORS.secondary, fontWeight: '600' }}>
          View All
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: 16,
        }}
      >
        {Array(2)
          .fill(0)
          .map((_, i) => (
            <RecipeCardBordered key={i} />
          ))}
      </View>
    </View>
  );
};

export const RecipeDetails = ({ recipe }) => {
  return (
    <View>
      <Text>RecipeDetails</Text>
    </View>
  );
};

export interface RecipeListProps {
  recipes: any[];
  title: string;
}
