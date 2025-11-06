import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, Modal, View, Text  } from 'react-native';

import { styles } from './DialogModalStyles';

type DialogModalProps = {
    visible: boolean;
    title: string;
    message: string;
    contentBtn: string;
    onPressBtn: () => void;
    onClose: () => void;
};

export function DialogModal({ visible, title, message, onPressBtn, contentBtn, onClose }: DialogModalProps) {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.overlay}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContent}>
                            <Text style={styles.title}>
                                {title}
                            </Text>

                            <Text style={styles.text}>
                                {message}
                            </Text>

                            <TouchableOpacity
                                style={styles.containerButton}
                                onPress={onPressBtn}
                            >
                                <Text style={styles.textButton}>{contentBtn}</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}