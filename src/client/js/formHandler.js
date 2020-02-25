import { domItems } from "./domItems";
import { checkForUrl } from "./urlChecker";
import {postData, getData} from './endPointsApi'

// to resovlve the problem: egeneratorRuntime is not defined, I imported babel-polyfill
import 'babel-polyfill';
import 'whatwg-fetch'

// returnData fn is to check wether the requested data is existed to be displayd or not
const returnData = (data, element, catcher) => (data ? element : catcher);

const updateUI = () => {

   domItems.results.innerHTML = ''
   
   getData('http://localhost:7079/*').then(res => {
       const data = res
       domItems.spinner.style.display = 'none'
       domItems.arrow.style.display = 'block'
       setTimeout(() => {
           domItems.arrow.style.display = 'none'
        },3000)
        
        domItems.results.innerHTML = 
        `<div class="tone">
            ${returnData(
                data.polarity,
                `<span>Polarity<h2>${data.polarity}</h2></span>`,
                "unknown"
            )}
            ${returnData(
                data.subjectivity,
                `<span>Subjectivity <h2>${data.subjectivity}</h2></span>`,
                "unknown"
            )}
        </div>
        
        <article>
            ${returnData(
                data.title,
                `<span id="title">Title <h2>${data.title}</h2></span>`,
                "no title is provided"
            )}
            </br>
            ${returnData(
                data.author,
                `<span id="author">Author <h2>${data.author}</h2></span>`,
                ""
            )}
            </br>
            ${returnData(
                data.article,
                `<span>the evaluated article</span>
                <p>${data.article}</p>`,
                "no article is available"
            )}
        </article>`;
        })
        
    };
    
    const handleSubmit = async( event) => {
    event.preventDefault();
    const url = domItems.urlInput.value;

    if (url) {
        if (checkForUrl(url)) {
            try {
                const a = await fetch('http://localhost:7079')
                if(a.status === 200){
               postData('http://127.0.0.1:7079/',{url})

                }
            } catch (error) {
                alert('express server is offline, run the express server and try again.')
            }
           
            domItems.spinner.style.display = 'block'
            updateUI();
                        
        } else {
            alert("Invalid url");
        }
    }

    domItems.urlInput.value = "";
}

export { handleSubmit };
