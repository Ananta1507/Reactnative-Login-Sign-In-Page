import React from 'react';
import { SafeAreaView } from 'react-native';
import LoginForm from './LoginForm'; // Sesuaikan jalur sesuai lokasi file
import HomeScreen from './Homescreen';

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LoginForm />
        </SafeAreaView>
    );
    
}
