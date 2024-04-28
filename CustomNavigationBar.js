import React from "react";
import { Appbar, Menu } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';

const CustomNavigationBar = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { options } = route;
    const { title } = options || {}; // Sử dụng một đối tượng rỗng làm giá trị mặc định

    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return (
        <Appbar.Header>
            <Appbar.Content title={title} />
            <Appbar.Action icon="dots-vertical" onPress={openMenu} />
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
            >
                <Menu.Item
                    onPress={() => {
                        console.log('Option 1 was pressed');
                    }}
                    title="Home"
                />
                <Menu.Item
                    onPress={() => {
                        navigation.navigate("Details");
                    }}
                    title="Detail"
                />
                <Menu.Item
                    onPress={() => {
                        navigation.navigate('Option 3 was pressed');
                    }}
                    title="Option 3"
                />
            </Menu>
        </Appbar.Header>
    );
}

export default CustomNavigationBar;