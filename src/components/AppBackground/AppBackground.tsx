import {SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import {COLORS} from "../../theme/colors";
import {SCREEN_SIZE} from "../../theme/sizes";

interface Props {
    navigation?: any;
    titleText?: string;
    titleIcon?: any;
    rightIcon?: any;
    children?: any;
    hasLeftIcon?: boolean;
    leftIcon?: any;
    appBgStyle?: any;
    containerStyle?: any;
    topContainerStyle?: any;
    onBackBtnPress?: () => void;
}
export const AppBackground: React.FC<Props> = ({children, appBgStyle}) => {
    return (
        <SafeAreaView style={[styles.container, appBgStyle]}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.appBg,
        paddingTop: SCREEN_SIZE.paddingSmall,
        paddingHorizontal: SCREEN_SIZE.padding,
    },
    topContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btnBack: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});
