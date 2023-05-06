import {Image, View} from "react-native";
import {BoldText} from "../../../components/CustomText/BoldText";
import CustomText from "../../../components/CustomText/CustomText";
import {COLORS} from "../../../theme/colors";
import {FONTSIZE} from "../../../theme/sizes";
import ICONS from "../../../constants/icons";
import CustomImage from "../../../components/CustomImage";
import {VerticalSpacer} from "../../../components/Spacers/VerticalSpacer";

export const ProfileHeader = ({username, imgUrl}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
           <View>
               <BoldText>Hello {username}</BoldText>
               <VerticalSpacer height={4} />
               <CustomText style={{color: COLORS.gray3, fontSize: FONTSIZE.font12}}>What are you cooking today?</CustomText>
           </View>
            <View>
                <CustomImage image={imgUrl ?? ICONS.avatar} style={{width: 40, height: 40}} />
            </View>
        </View>
    )
};
