import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PillRoutineStackParamList } from "./PillRoutineManagerNavigator";
import { View, Text, StyleSheet } from "react-native";
import MainHeader from "../components/MainHeader";
import { PillRoutine } from "../types/pill_routine"
import ClickableButton from "../components/ClickabeButton";
import { globalStyle } from "../style";
import { useCallback, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PillRoutineList from "./components/PillRoutineList";
import { useFocusEffect } from "@react-navigation/native";
import { ProfileKeyContext } from "../profile_picker/ProfileKeyContext";
import axios from "axios";
import { useKeycloak } from "@react-keycloak/native";
import AddButton from "../components/AddButton";
import { MEDICINE_API_HOST } from "../constants";
import PillNotificationManager from "../utils/pill_notification_manager";

type Props = NativeStackScreenProps<PillRoutineStackParamList, "PillRoutineManager">;

export default function PillRoutineManagerScreen({ route, navigation }: Props){
    const styles = StyleSheet.create({
        mainContainer: {
            alignItems: "center",
            height: "100%",
            gap: 16
        },
        textAndButtonContainer: {
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            height: 240,
            paddingTop: 16
        },
        text: {
            color: "#909090",
            textAlign: "center",
            fontSize: 32
        },
        addButtnContainer: {
            position: "absolute",
            bottom: 42,
            right: 42
        }
    });

    const {profileKey, setProfileKey} = useContext(ProfileKeyContext);

    const getPillRoutines = async () => {
        try{
            const resp = await axios.get(`${MEDICINE_API_HOST}/account/${keycloak?.tokenParsed?.sub}/profile/${profileKey}/pill_routines`, {
                headers: {
                    Authorization: keycloak?.token
                }
            })
            
            console.log(resp.data)
            setPillRoutines(resp.data.data);
        } 
        catch(err){
            console.error(err);
        }
    }

    useFocusEffect(useCallback(()=>{
        const getProfile = async () => {
            try {
                const { data } = await axios.get(`${MEDICINE_API_HOST}/account/${keycloak?.tokenParsed?.sub}/profile/${profileKey}`, {
                    headers: {
                        Authorization: keycloak?.token
                    }
                })
                console.log(data);
                
                setProfileData({
                    name: data.name,
                    avatarNumber: data.avatarNumber
                })
            }
            catch(err){
                console.error(err);
            }
        }
        const run = async () => {
            await getProfile();
            await getPillRoutines();
            setIsLoading(false)
        }

        run();
    }, []))

    const {keycloak} = useKeycloak()
    const [profileData, setProfileData] = useState({
        name: "",
        avatarNumber: 0
    })
    const [ pillRoutines, setPillRoutines ] = useState<PillRoutine[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    if(isLoading){
        return (
            <View>

            </View>
        )
    }

    let numberOfActiveRoutines = 0;
    pillRoutines.forEach(pillRoutine=>{
        if(pillRoutine.status == "active"){
            numberOfActiveRoutines += 1;
        }
    })

    if(numberOfActiveRoutines == 0){
        return (
            <View>
                <MainHeader profileName={profileData.name} avatarNumber={profileData.avatarNumber}/>
                <View style={styles.textAndButtonContainer}>
                    <Text style={[globalStyle.text, styles.text]}>Comece adicionando sua primeira rotina de tratamento</Text>
                    <ClickableButton
                        width={250}
                        height={60}
                        onPress={()=>{navigation.navigate("NameDefinition")}}
                        text="Vamos lá"
                    />
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.mainContainer}>
                <MainHeader profileName={profileData.name} avatarNumber={profileData.avatarNumber}/>
                <PillRoutineList
                    pillRoutines={pillRoutines}
                    onPillRoutineEdit={pillRoutineKey=>{
                        navigation.navigate("EditPillRoutine", {
                            pillRoutineKey: pillRoutineKey
                        })
                        return
                    }}
                    onPillRoutineDelete={async pillRoutineKey=>{
                        await axios.put(`${MEDICINE_API_HOST}/account/${keycloak?.tokenParsed?.sub}/profile/${profileKey}/pill_routine/${pillRoutineKey}/status`,
                        {
                            status: "canceled"
                        }, {
                            headers: {
                                Authorization: keycloak?.token
                            }
                        });

                        PillNotificationManager.deleteAndCreatePillsNotifications(
                            keycloak?.tokenParsed?.sub!, keycloak?.token!, 5
                        )
                        getPillRoutines();
                    }}
                />
                <View style={styles.addButtnContainer}>
                    <AddButton
                        size={44}
                        onPress={()=>{navigation.navigate("NameDefinition")}}
                    />
                </View>
            </View>
        )
    }

}