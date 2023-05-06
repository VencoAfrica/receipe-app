import { reducerActions as reducers } from "./reducer";
import {
  fetchRecipesByQuantity,
  fetchRecipesBycuisineType,
} from "../../apis/testEdamamAPI";
import { showMessage } from "react-native-flash-message";

const IsState: any = {
  receipes: [],
  loading: false,
};

export const Receipe = {
  name: "Receipe",
  state: IsState,
  reducers,
  effects: (dispatch: any) => ({
    async getReceipeByQuantity(query: any) {
      dispatch.Receipe.setState({
        loading: true,
      });
      try {
        const data = await fetchRecipesByQuantity(query);
        if (data) {
          dispatch.Receipe.setState({
            receipes: data,
          });
          return true;
        }

        // if (data) {
        //   return data;
        // }
      } catch (error) {
        this.handleError(error);
      } finally {
        dispatch.Receipe.setState({
          loading: false,
        });
      }
    },
    async getReceipeBycuisineType(query: any) {
      dispatch.Receipe.setState({
        loading: true,
      });
      try {
        const data = await fetchRecipesBycuisineType(query);
        if (data) {
          dispatch.Receipe.setState({
            receipes: data,
          });
          return true;
        }

        // if (data) {
        //   return data;
        // }
      } catch (error) {
        this.handleError(error);
      } finally {
        dispatch.Receipe.setState({
          loading: false,
        });
      }
    },

    async searchReceipe(text: string, receipes: any) {
      if (text) {
        const newRecipe = receipes?.filter((item: any) => {
          const itemData = item?.recipe
            ? item?.recipe?.cautions[0]?.toUpperCase()
            : "".toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        dispatch.Receipe.setState({
          receipes: newRecipe,
        });
      } else {
        // setSearch(text);
        dispatch.Receipe.setState({
          receipes: receipes,
        });
      }
    },
    async handleError(error: any) {
      dispatch.Receipe.setError(true);
      if (error || error?.data?.errors || error?.data?.status === "error") {
        var message =
          error?.message ||
          error?.data?.message ||
          "An error occured. Please try again.";

        return showMessage({
          message,
          type: "danger",
          duration: 2500,
        });
      }
    },
  }),
};
