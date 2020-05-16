import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Text, Header, Container, Content, List, ListItem, Left, Icon, Right, Thumbnail} from 'native-base';
import {Avatar} from 'react-native-paper';

function SettingsScreen({navigation}) {

    function handleSignOut() {
        navigation.navigate("SignInScreen")
    }

    return (
        <Container>
            <Header>
                <Body>
                    <Text>Settings</Text>
                </Body>
            </Header>
            <Content>
                <List>
                    <ListItem
                        button={true}
                        thumbnail={true}
                        first={true}
                        onPress={()=> (navigation.navigate("ProfileScreen"))}>
                        <Left>
                            <Avatar.Text label="SH"/>
                        </Left>
                        <Body>
                            <Text style={styles.name}>Stanley Hayford</Text>
                            <Text style={styles.secondaryText}>Visit Profile</Text>
                        </Body>
                        <Right>
                            <Icon type="MaterialIcons" name="chevron-right"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        onPress={()=> (navigation.navigate("EditProfileScreen"))}
                        button={true}
                        thumbnail={true}>
                        <Left>
                            <Icon type="MaterialIcons" name="edit"/>
                        </Left>
                        <Body>
                            <Text>Edit Profile</Text>
                        </Body>
                        <Right>
                            <Icon  type="MaterialIcons"  name="chevron-right"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        onPress={()=> (navigation.navigate("ChangePasswordScreen"))}
                        button={true}
                        thumbnail={true}>
                        <Left>
                            <Icon type="MaterialIcons"  name="lock"/>
                        </Left>
                        <Body>
                            <Text>Change Password</Text>
                        </Body>
                        <Right>
                            <Icon type="MaterialIcons"  name="chevron-right"/>
                        </Right>
                    </ListItem>

                    <ListItem
                        onPress={handleSignOut}
                        button={true}
                        thumbnail={true}
                        last={true}>
                        <Left>
                            <Icon type="MaterialIcons"  name="exit-to-app"/>
                        </Left>
                        <Body>
                            <Text>Log out</Text>
                        </Body>
                        <Right>
                            <Icon type="MaterialIcons"  name="chevron-right"/>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 20
    },
    secondaryText: {
        fontSize: 12,
        color: "gray"
    }
});

export default SettingsScreen;
