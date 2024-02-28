import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RootNavigation from './Navigator/RootNavigation';
import AppProvider from './Provider/AppProvider';

export default function App() {
    return (
        <AppProvider>
            <View style={styles.container}>
                <RootNavigation />
                <StatusBar style="light" />
            </View>
        </AppProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});
