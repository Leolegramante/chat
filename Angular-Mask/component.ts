import { Component } from '@angular/core';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent {
  testData: {
    voltage: number,
    temperature: number,
    testTime: number,
    size: number,
    hardness: number,
    finalScale: string,
    coldSize: number
  } = {
    voltage: 0,
    temperature: 0,
    testTime: 0,
    size: 0,
    hardness: 0,
    finalScale: '',
    coldSize: 0
  };

  // Adicione uma propriedade para armazenar a multiplicação
  temperatureTimeMultiplication: number = 0;

  onSubmit() {
    // Lógica para salvar os dados de teste aqui (por exemplo, enviar para um serviço)
    console.log('Dados de Teste a serem salvos:', this.testData);
  }

  // Adicione um método para calcular a multiplicação
  calculateMultiplication() {
    this.temperatureTimeMultiplication = this.testData.temperature * this.testData.testTime;
  }
}
