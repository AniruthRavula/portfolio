import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '../modal/modal.component';
import { ProjectmodalComponent } from '../projectmodal/projectmodal.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {
  activeFilter = 'seo';
  // clickAudio = new Audio('assets/images/click.wav');
  

  works = [
    {
      imageUrl: 'assets/images/certifications/gcp.png',
      description: 'Associate Cloud Engineer',
      title: 'Google Cloud Platform',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/azure.png',
      title: 'Microsoft',
      description: 'Azure Fundamentals',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/ts.png',
      title: 'Kaggle',
      description: 'Time Series',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/splunk.jpg',
      title: 'Splunk',
      description: 'Splunk Fundamentals',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/HTML.png',
      title: 'Linkedin Learning',
      description: 'HTML Essential Training',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/JavaScript.png',
      title: 'Linkedin Learning',
      description: 'Learning the JavaScript ',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/CSS.png',
      title: 'Linkedin Learning',
      description: 'CSS Essential Training',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/shell.png',
      title: 'Linkedin Learning',
      description: 'Learning Linux Shell Scripting',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/restfulapis.jpg',
      title: 'Linkedin Learning',
      description: 'Designing RESTfuL APIs',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/CoreJava.jpg',
      title: 'TCS Talent Development',
      description: 'Core Java',
      categories: ['webdesign']
    },

    {
      imageUrl: 'assets/images/certifications/linux.jpg',
      title: 'TCS Talent Development',
      description: 'Unix/Linux Basics',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/certifications/iot.png',
      title: 'Coursera',
      description: 'Interent of Things',
      categories: ['webdesign']
    },
    {
      imageUrl: 'assets/images/achivements/ac.jpg',
      title: 'TCS',
      description: 'Certificate of appericiation',
      categories: ['work']
    },
    {
      imageUrl: 'assets/images/achivements/ots.jpg',
      title: 'TCS',
      description: 'On the Spot Award',
      categories: ['work']
    },
    {
      imageUrl: 'assets/images/projects/digits.jpg',
      description: 'I worked on classifying handwritten digits using the MNIST dataset, which contains 70,000 grayscale images of numbers from 0 to 9. By implementing a Multilayer Perceptron (MLP), a basic type of neural network, I achieved 96% accuracy in recognizing the digits. To improve the results, I utilized a Residual Neural Network (ResNet), an advanced architecture that allows for training deeper networks more effectively, boosting the accuracy to 98%. These models successfully learned to identify the patterns in handwritten numbers, enhancing the precision of the classification task.',
      title: 'MNIST Digit Classification',
      categories: ['seo']
    },
    {
      imageUrl: 'assets/images/projects/cifarten.png',
      description: 'In my image classification project, I worked on CIFAR-10 dataset, which contains 60,000 32x32 color images divided into 10 classes: airplane, automobile, bird, cat, deer, dog, frog, horse, ship, and truck. This dataset is a standard benchmark in the field, comprising 50,000 training images and 10,000 testing images. I experimented with several convolutional neural network architectures: LeNet, achieving 72% accuracy; AlexNet, improving this to 83% with its deeper layers and ReLU activations; VGG-16, which reached 82% by employing small convolutional filters for fine detail capture; and ResNet, which led the results with an impressive 91% accuracy.',
      title: 'CIFAR-10 Image Classification',
      categories: ['seo']
    },
    {
      imageUrl: 'assets/images/projects/lstm.png',
      description: 'Developed a sentiment analysis model using an RNN with LSTM cells to classify IMDB movie reviews as positive or negative. The dataset consisted of 50,000 reviews evenly split between both sentiments. By leveraging LSTM\'s ability to capture long-term dependencies, the model effectively handled sequential text data and overcame the vanishing gradient problem common in RNNs. Techniques such as tokenization and word embeddings were used for text representation. The model achieved 87% accuracy on the test set, showcasing its ability to perform sentiment classification.',
      title: 'Sentiment Analysis on IMDB Movie Reviews',
      categories: ['seo']
    },
    {
      imageUrl: 'assets/images/projects/gan.png',
      description: 'I developed a Generative Adversarial Network (GAN) to generate realistic MNIST handwritten digits. The network consists of a generator and a discriminator, where the generator creates new digit images from random noise, and the discriminator distinguishes between real and generated digits. The two networks are trained adversarially, with the generator improving its output to deceive the discriminator over time. The model was trained on the MNIST dataset, containing 60,000 images of handwritten digits.',
      title: 'Generating MNIST Handwritten Digits',
      categories: ['seo']
    },
    {
      imageUrl: 'assets/images/projects/portfolio.png',
      description: '',
      title: 'Personal Portfolio Angular',
      categories: ['seo']
    },
    {
      imageUrl: 'assets/images/projects/rescue.png',
      description: '',
      title: 'Automatic Accident Avoidance and Detection System using LabVIEW',
      categories: ['seo']
    }

  ];

  get filteredWorks() {
    if (this.activeFilter === '*') {
      return this.works.filter(work => work.categories.includes('seo'));
    } else {
      return this.works.filter(work => work.categories.includes(this.activeFilter));
    }
  }

  setActiveFilter(filter: string) {
    this.activeFilter = filter;
  }

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private router: Router, private modalService: MdbModalService) { 
    // this.clickAudio.load();
    this.handleWorkClick = this.debounce(this.handleWorkClick.bind(this), 200); 

  }



  openModal(work: { imageUrl: string; description: string }) {
    this.modalRef = this.modalService.open(ModalComponent, {
      modalClass: 'modal-lg modal-dialog-centered',
      data: {
        imageUrl: work.imageUrl,
        title: work.description
      },
      backdrop: true,
    });
  }

  openProjectModal(work: { imageUrl: string; description: string; title: string }) {
    this.modalRef = this.modalService.open(ProjectmodalComponent, {
      modalClass: 'modal-lg modal-dialog-centered',
      data: {
        imageUrl: work.imageUrl,
        description: work.description,
        title: work.title
      },
      backdrop: true,
    });
  }

  handleWorkNavigation(work: any): void {
    if (work.title === 'Personal Portfolio Angular') {
      const element = document.getElementById('home');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (work.title === 'Automatic Accident Avoidance and Detection System using LabVIEW') {
      window.open('https://www.warse.org/IJATCSE/static/pdf/file/ijatcse164942020.pdf', '_blank');
    } else {
      this.handleWorkClick(work);
    }
  }

  handleWorkClick(work: any) {

    if (work.categories.includes('seo')) {
      this.openProjectModal(work);
    } else {
      this.openModal(work);
    }
  }

  getWebPUrl(url: string) {

    if (url.toLowerCase().endsWith('.webp')) {
      return url;
    }
    const lastDotIndex = url.lastIndexOf('.');
    if (lastDotIndex !== -1) {
      return url.substring(0, lastDotIndex) + '.webp';
    }
    console.log(url)
    return url + '.webp';
  }
  
  // playClickSound() {
  //   this.clickAudio.play();
  // }

  debounce(func: (...args: any[]) => void, wait: number) {
    let timeout: any;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  

  

}
