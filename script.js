let jsonData = {
    "countries": [
      {
        "country": "Ancient Athens",
        "national_flower": {
          "name": "Olive Tree",
          "blooming_period": "May to June",
          "meaning": "Peace and prosperity",
          "image_url": "https://landarchconcepts.wordpress.com/wp-content/uploads/2021/05/greek-mythology-cover.jpg?w=1239",
          "bg_color": "#E5D9B6",
          "story": "The olive tree is deeply tied to the culture of Ancient Athens, symbolizing peace and abundance. According to mythology, Athena gifted the city with the olive tree, making it the sacred symbol of the city."
        }
      },
      {
        "country": "China",
        "national_flower": {
          "name": "Peony",
          "blooming_period": "April to June",
          "meaning": "Prosperity, honor",
          "image_url": "https://img.pconline.com.cn/images/upload/upc/tx/itbbs/1504/13/c54/5339316_1428913987696.jpg",
          "bg_color": "#FFDDC1",
          "story": "The peony has been revered in China for thousands of years. Known as the 'king of flowers,' it symbolizes wealth and honor and is a common theme in Chinese art and literature."
        }
      },
      {
        "country": "USA",
        "national_flower": {
          "name": "Rose",
          "blooming_period": "June to October",
          "meaning": "Love, beauty, courage",
          "image_url": "https://ts1.cn.mm.bing.net/th/id/R-C.7d611f4b5e8273647a23798d7fe800aa?rik=dHUtrNlMgZEvTA&pid=ImgRaw&r=0",
          "bg_color": "#FFF0F5",
          "story": "The rose is a timeless symbol of love and beauty, chosen as the national flower of the USA due to its widespread cultivation and popularity. Each color of the rose carries a specific meaning."
        }
      },
      {
        "country": "Japan",
        "national_flower": {
          "name": "Cherry Blossom",
          "blooming_period": "March to April",
          "meaning": "Transient beauty, renewal",
          "image_url": "https://www.realestate.com.au/news-image/w_1200,h_900/v1657825043/news-lifestyle-content-assets/wp-content/production/Charry-blossoms-hero.webp?_i=AA",
          "bg_color": "#FFB7C5",
          "story": "Cherry blossoms are iconic in Japan, symbolizing the ephemeral nature of life. Each spring, people gather under the blossoms to celebrate 'hanami' and reflect on the transient beauty of life."
        }
      },
      {
        "country": "India", 
        "national_flower": {
          "name": "Lotus",
          "blooming_period": "July to October",
          "meaning": "Purity, enlightenment",
          "image_url": "https://i5.walmartimages.com/asr/a4ccc8d0-463f-408f-a105-0c074922cfe3_1.97fbf0bd44120db7f242d997e4e78d49.jpeg",
          "bg_color": "#8ea4bd",
          "story": "The lotus flower holds great spiritual significance in India. It represents purity, self-regeneration, and enlightenment, often depicted in Indian art and associated with deities like Vishnu and Lakshmi."
        }
      },
      {
        "country": "Lithuania",
        "national_flower": {
          "name": "Rue",
          "blooming_period": "July to August",
          "meaning": "Virtue and purity",
          "image_url": "https://foliagefriend.com/wp-content/uploads/2023/04/Rue-Flowers.jpeg",
          "bg_color": "#c8c78a",
          "story": "The rue is a symbol of purity and chastity in Lithuanian folklore. The fragrance and medicinal value of rue lead people to believe that it can ward off evil."
        }
      }
    ]
  };
  
  function setup() {
      noCanvas();
      selectButtons();
  }
  
  function selectButtons() {
      document.getElementById('athens').addEventListener('click', () => displayInfo('Ancient Athens'));
      document.getElementById('china').addEventListener('click', () => displayInfo('China'));
      document.getElementById('usa').addEventListener('click', () => displayInfo('USA'));
      document.getElementById('japan').addEventListener('click', () => displayInfo('Japan'));
      document.getElementById('india').addEventListener('click', () => displayInfo('India'));
      document.getElementById('lithuania').addEventListener('click', () => displayInfo('Lithuania'));
  }
  
  function displayInfo(selectedCountry) {
      const countryData = jsonData.countries.find(country => country.country === selectedCountry);
      
    
      document.getElementById('country-name').textContent = countryData.country;
      document.getElementById('flower-info').innerHTML = `
      <strong>${countryData.national_flower.name}:</strong> ${countryData.national_flower.meaning}<br/>
      <strong>Blooming Period:</strong> ${countryData.national_flower.blooming_period}<br/>
      <strong>Story:</strong> ${countryData.national_flower.story}
    `;

      const flowerImage = document.getElementById('flower-image');
      flowerImage.src = countryData.national_flower.image_url;
      flowerImage.style.display = 'block';
      
     
      document.querySelector('.display').style.backgroundColor = countryData.national_flower.bg_color;
  }
  