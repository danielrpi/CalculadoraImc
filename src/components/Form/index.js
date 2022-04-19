import React, {useState} from "react";
import {Button, Text, TextInput, View, TouchableOpacity} from "react-native";
import ResultImc from "./ResultImc"
import styles from "./style"

export default function Form(){

const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null)
const [massageImc, setMassageImc] = useState("Preencha o peso e a altura.")
const [imc, setImc] = useState(null)
const [TextButton, setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))

}

function validationImc(){
    if(weight != null && height!=null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMassageImc("Seu Imc é igual:")
        setTextButton("Calcular Novamente")
        return
    }

    setImc(null)
    setTextButton("Calcular")
    setMassageImc("Preencaha o peso e a altura")
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Ex: 1.79" keyboardType="numeric"/>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Ex: 50" keyboardType="numeric"/>
               
                <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                   <Text style={styles.textButtonCalculator}> {TextButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc  messageResultImc={massageImc} resultImc={imc}/>
        </View>
    );
}