import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';

import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { createUser, checkSession } from '../../lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const checkExistingSession = async () => {
      const session = await checkSession();
      if (session) router.replace('/home');
    };
    checkExistingSession();
  }, []);

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      await createUser(form.email, form.password, form.username);
      router.replace('/home');
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center min-h-[80vh] px-4 my-6">
          <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[34px]"/>
          <Text className="text-2xl font-semibold text-white mt-10">Sign up to EcoVoyage</Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(username) => setForm({ ...form, username })}
            otherStyles="mt-10"
          />
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(email) => setForm({ ...form, email })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(password) => setForm({ ...form, password })}
            otherStyles="mt-7"
          />
          <CustomButton 
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100">Have an account already?</Text>
            <Link href="/sign-in" className="text-lg text-secondary">Sign in</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
