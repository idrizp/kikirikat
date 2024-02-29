import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';

export default function SignUp() {
    const [usernameEmail, setUsernameEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <View style={container.main}>
            <Text style={items.header}>
                Sign Up
            </Text>

            <View style={container.body}>
                <View style={container.fields}>
                    <View style={container.field}>
                        <Text style={items.fieldName}>
                            Full Name:
                        </Text>
                        <TextInput
                            style={items.input}
                            placeholder='John Doe'
                            onChangeText={input => setUsernameEmail(input)}
                        />
                    </View>

                    <View style={container.field}>
                        <Text style={items.fieldName}>
                            Username:
                        </Text>
                        <TextInput
                            style={items.input}
                            placeholder='johndoe'
                            onChangeText={input => setPassword(input)}
                        />
                    </View>

                    <View style={container.field}>
                        <Text style={items.fieldName}>
                            E-Mail:
                        </Text>
                        <TextInput
                            style={items.input}
                            placeholder='johndoe@email.com'
                            onChangeText={input => setUsernameEmail(input)}
                        />
                    </View>

                    <View style={container.field}>
                        <Text style={items.fieldName}>
                            Password:
                        </Text>
                        <TextInput
                            style={items.input}
                            placeholder='johndoe@email.com'
                            onChangeText={input => setUsernameEmail(input)}
                        />
                    </View>

                    <View style={container.field}>
                        <Text style={items.fieldName}>
                            Phone Number:
                        </Text>
                        <View style={items.input}>
                            <TextInput
                                placeholder=''
                                onChangeText={input => setUsernameEmail(input)}
                            />
                        </View>
                    </View>
                </View>

                <View style={container.signUpButton}>
                    <Button
                        title='Sign Up'
                        color='black'
                    />
                </View>

                <View style={container.otherOptions}>
                    <View style={container.divider}>
                        <Image
                            source={require('../assets/or_with_line.png')}
                            style={items.dividerLine}
                        />
                        <Text style={items.dividerText}>
                            or with
                        </Text>
                        <Image
                            source={require('../assets/or_with_line.png')}
                            style={items.dividerLine}
                        />
                    </View>

                    <View style={container.logos}>
                        <TouchableOpacity>
                            <Image
                                source={require("../assets/apple_logo.jpg")}
                                style={items.logo}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require("../assets/google_logo.png")}
                                style={items.logo}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Image
                                source={require("../assets/github_logo.png")}
                                style={items.logo}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const container = StyleSheet.create({
    main: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: '15%', // add padding to the top
        padding: '9%', // add padding to the sides
        gap: 30,
    },
    body: {
        width: '100%',
        gap: 40,
    },
    fields: {
        display: 'flex',
        justifyContent: 'space-around',
        gap: 15,
    },
    field: {
        display: 'flex',
        gap: 5,
    },
    otherOptions: {
        display: 'flex',
        gap: 15,
    },
    divider: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    logos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
});

const items = StyleSheet.create({
    header: {
        color: 'black',
        fontSize: 40,
        fontFamily: "Roboto",
        fontWeight: 'bold',
        textAlign: 'center',
    },
    forgotPassword: {
        color: "#ffbf1d",
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    logo: {
        width: 50,
        height: 50,
    }
});
