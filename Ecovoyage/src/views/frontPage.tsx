import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import {primary, secondary_100} from '../commonStyles/colors'
import spacing from '../commonStyles/Spacing';

import { images } from "../../constants";
import CustomButton from '../components/CustomButton';
import typography from '../commonStyles/Typography';
import { useGlobalContext } from "../../context/GlobalProvider";


export default function FrontPage() {
  //const { isLoading, isLoggedIn } = useGlobalContext();

  //if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={{...spacing.mt4, ...typography.h1}}>EcoVoyage</Text>

          <Image 
          source={images.cards} 
          resizeMode="contain" 
          style={styles.mainImage}
          />
          <View style={{padding:0, margin:0}}>
            <Text style={{...typography.h2}} >
            Discover Sustainable
            </Text>
            <View style={styles.underPicSection}>
              <Text style={{...typography.h2}}>
                Journeys with { ' ' }
                </Text>
                <Text style={{...typography.h2, color: secondary_100}}>EcoVoyage</Text>
            </View>
            <View style={{ alignSelf: 'flex-end', ...spacing.mr1 }}>
              <Image
                  style={{ width: 100 }}
                  source={images.path}
                  resizeMode="contain"
              />
            </View>
            <CustomButton style={{...spacing.mb1}} title='Continue with Email'/>
            <CustomButton title='Continue As A Guest'/>
            
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: primary,
    flex: 1,
    flexDirection: 'column',
  },
  underPicSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -16
  },
  mainImage: {
    width: '100%', 
    height: 300,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});