import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chatbot';

  messages: { sender: string, text: string }[] = [];
  userMessage: string = '';

  sendMessage() {
    if (this.userMessage.trim()) {
      this.messages.push({ sender: 'user', text: this.userMessage });
      this.getBotResponse(this.userMessage);
      this.userMessage = '';  // clear the input field
    }
  }

  getBotResponse(userMessage: string) {
    let botMessage = '';

    // Simple hardcoded responses for product recommendations and FAQs
    if (userMessage.toLowerCase().includes('product')) {
      botMessage = 'I can help you with product recommendations. Are you looking for electronics, fashion, or something else?';
    } else if (userMessage.toLowerCase().includes('order')) {
      botMessage = 'Please provide your order number to track it.';
    } else if (userMessage.toLowerCase().includes('help')) {
      botMessage = 'Sure! I can help with product information, orders, and more.';
    } else if (userMessage.toLowerCase().includes('laptop')) {
      botMessage = 'Ohk .Can I know which company laptop u want ?';
    } else if (userMessage.toLowerCase().includes('HP')) {
      botMessage = 'Yes we have stock of laptops in HP and many more like DELL, Asus,Lenovo';
    } else if (userMessage.toLowerCase().includes('price')) {
      botMessage = 'What budget u want to take device ?';
    } else if (userMessage.toLowerCase().includes('fashion')) {
      botMessage = 'What type of fasion uh want for men ,women,kids ?';
    } else if (userMessage.toLowerCase().includes('men')) {
      botMessage = 'We have many branded Tshirt,Shirts,Sweatshirt,Kurtis,pants';
    } else if (userMessage.toLowerCase().includes('mobile')) {
      botMessage = 'here are the list of new Mobile that are launched in last month :- 1)Sumsung 2)Realme 3)Iphone';

    } else if (userMessage.toLowerCase().includes('how are you')) {
      botMessage = 'I am a bot, but I am doing fine! How about you?';
    } else if (userMessage.toLowerCase().includes('device')) {
      botMessage = 'In our store we have great deals on eletronics devices like mobile,laptop,tab etc ';
    } else if (userMessage.toLowerCase().includes('hello')) {
      botMessage = 'HEY HERE...! Welcome to our Sales Store what can i help uh ?';
    } else if (userMessage.toLowerCase().includes('time')) {
      const currentTime = new Date().toLocaleTimeString();
      botMessage= `The current time is ${currentTime}.`;
    } else if (userMessage.toLowerCase().includes('deals')) {
      botMessage = 'We have exciting deals on product. Tell me which product u want ?'; 
    }else {
      botMessage = 'Sorry, I didn\'t understand that. Could you please ask something else?';
    }
    this.messages.push({ sender: 'bot', text: botMessage });
  }
}
