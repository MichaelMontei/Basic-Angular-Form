# Basic-Angular-Form
Learning Angular
![](Images/angularscreen.png)
### Introduction into Framework Angular


### Steps
- [x] Clone this repository locally
- [x] Check if you have node.js and npm, if not, install them.
  - node: <code>node -v</code> or <code>node -version</code>
  - npm: <code>npm -v</code> or <code>npm -version</code>
- [x] Install the Angular cli with <code>npm install -g @angular/cli</code> and check afterwards if you have it with <code>ng version</code>
- [x] Navigate to the root of your clone of this repository in the terminal and enter the command <code>ng new project-name</code>. You should now have 2 folders called "server", your node API, and "project-name", your angular app.
- [x] Go inside of the "project-name" folder and run the command <code>ng serve --port 4500</code>. You can now check out your angular app on <code>localhost:4500</code>.
  - [x] In your editor, navigate to <code>project-name/src/app</code>. In here you'll find 2 things.
    - [x] The template, app.component.html
    - [x] The component, app.component.ts.
    - [x] The view you see in the page is produced by the combination of that <strong>template</strong> and the <strong>component</strong> that brings the logic to the template.
    - [x] You should never pay attention to .spec files, these are for unit testing which is out of scope for this exercise.
- [x] Empty the "AppComponent" class and the template. The template file should be completely empty. Inside of the AppComponent class you'll write your logic and in the template you can use it and write the html.
- [x] In the HTML file, add a form with the required inputs at least. Go take a look at the must haves to see which are required. Don't forget a submit button, make it a regular button, <strong>not an input type button</strong>!
- [x] You might have already added a select input for the languages with the options inside of it. This can be optimised by putting the names of the languages inside of an array in your component class. Next, you can use the ngFor loop to generate all the options, way more efficient right?
- [x] Now you will have to bind the data to your form
  - [x] In your app.module.ts, import the FormsModule from @angular/forms. Also add it to the imports array.
  - [x] Add <code>#formName="ngForm"</code> to your form. This will make "formName" a variable which contains all the data of the form in realtime.
  - [x] Also add <code>#inputName="ngModel"</code> to every input tag.
  - [x] Make sure all your inputs have a name attribute and also put <code>ngModel</code> inside of each input.
  - [x] Test if it works by adding <code>{{ formName.value | json }}</code> at the top of your html. If you take a look at your page and fill in some values, you'll see them update automatically.
- [x] The ngModel that's added to the inputs is not complete yet. It's supposed to be used to bind the data to a model.
  - [x] First we need to add a new "friend" model to our project, in the root of your angular app in the terminal, run the command <code>ng generate class Friend</code>.
  - [x] Open the generated friend.ts file and add a constructor to the class. In there, depending on which inputs you used, add the corresponding properties. Don't forget to typehint them. Thanks typescript!
  - [x] In your component class, instantiate the friendModel through the friend class with all the properties set to null. To do this you'll also need to import the Friend class.
  - [x] Next, in your HTML, change the ngModel of your inputs to be like this: <code>[(ngModel)]="friendModel.propertyName"</code>. Of course, replace the propertyName with the corresponding name of your property.
  - [x] To test if this works, go back to the top of your HTML and change <code>{{ formName.value | json }}</code> to <code>{{ friendModel | json }}</code>. You'll see that at the top of your page in the browser, nothing really changed. Now your data is binded to the friend model.
- [x] Now we need to display when a field is invalid to the user.
  - [x] Add the required property to all inputs, this will make sure that angulars "invalid" tag gets added to the fields that are not filled in.
  - [x] Make a class, or use a bootstrap class, that makes it clear that something is wrong with that input. For example, a red border color.
  - [x] To conditionally add that class to your input, add <code>[class.yourClassName]="property.invalid"</code>. This means the class "yourClassName" will be applied to the input when a specific property is invalid.
  - [x] Now the fields that are empty, and thus invalid, will have the invalid class applied. However, we don't want this when the user hasn't even touched the input. To add this functionality, change the condition to <code>[class.yourClassName]="property.invalid && property.touched"</code>.
  - [x] The only way fields are invalid now, is when there's nothing in it and the user has touched the input already. However, if the user would for example put a sentence in the phone number field, we want to display it as invalid too.
  - [x] To do this, add the pattern property to the input field and as a value add the regular expression that it would have to suffice. Go to https://regex101.com/ if you want to test out and learn more about regex.
  - [x] Regex is hard and you don't have to do it perfectly, however it is manageable to
    - [x] Have no numbers in names
    - [x] Have no letters in phone numbers
    - [x] Have no special code characters allowed anywhere if they're not needed.
    - [x] Further error displaying is optional. You could for example add a message below each field. After that you can give it a conditional class, based on if the field is valid / touched or not. The class will make it not display if the field is valid.
- [x] If all the fields are valid, the forms valid property will also be set to valid. Let's disable the button when the form is not valid.
  - [x] To check if the form is invalid, you'll need to use <code>formName.form.invalid</code>.
  - [x] You can make a conditional property again by entering <code>[property]="condition"</code> in your button. Disable the button conditionally based on the invalidity of the form.
  - [x] Now that the form validation is set up, add the "novalidate" property to your form to prevent the automatic browser validation.
  - [x] To see if your button is actually getting disabled, inspect your button HTML in the browser.
- [x] Let's submit the data to a server now, but before we can do that we need to be able to do something on submit and get access to http requests.
  - [x] If you add the ngSubmit property to your form, you can bind a function to it and use that function in your component class to trigger it on submit. This is how it looks like: <code>(ngSubmit)="yourFunction()"</code>.
  - [x] In your component class, define the function and console log your friend model. Now when you submit you'll see the data appear in your console.
  - [x] To add this friend to your friendlist server, we'll need to make a service for it. We'll use the cli for this and input the command <code>ng g s addFriend</code>. This means, a"ng"ular "g"enerate "s"ervice with name "addFriendService", when you generate a service you'll see that after the name you've given it will automatically add "Service" after it.
  - [x] In your newly generated addFriend.service.ts file, import the HttpClient. In your addFriend class, add a new private property called http to the constructor. Typehint it to be of type HttpClient.
  - [x] You'll also have to import the HttpClientModule in your app.module.ts, also add it to the imports array below.
- [x] We now have our data on submit and we're in a position to start http requests. Now we want to post our data to a server.
  - [x] In the service, make a method called addFriend and give it a parameter, typehint it to be of the Friend type. You'll also need to import Friend.
  - [x] In this method, write a post request. It looks like this: <code>this.http.post<any>(url, data)</code>. Return it afterwards, what you'll get back in something called an observable. http is the property HttpClient, <any> is the type of data your post can contain and url is the url you're sending the data to.
  - [x] We'll get back to the url later. For now, make a property called 'url' and leave it as an empty string.
  - [x] In your app.component.ts also import your service and make a constructor in the component class. Add a private "addFriendService" property and typehint it.
  - [x] Now we can use the service in the method that triggers when the form gets submitted. In the method, call the addFriend method of the addFriendService and pass the friend data to it.
  - [x] The method we made returns something called an "observable". If you want, you can also work with promises, however in this case we used an observable and to get the data out of it, we need to subscribe to it.
  - [x] The code to subscribe to an observable looks like this <code>observable.subscribe(data => it worked, error => it didn't work)</code>.
- [x] Everything is set up in order to send data to your local api.
  - [x] First, in the server.js file in the server folder, change the port to whatever number you like that is not occupied. Port numbers 9000 - 9099 are always safe, just make sure no other application is running on those ports.
  - [x] In the server folder in your terminal, run the command <code>node server</code>. You won't get any confirmation that the server is running, just a blank new line. Now navigate to <code>localhost:PORT</code>.
  - [x] You should see "Hello from server". That is because the get function in the server file with the root "/" as it's path sent it as a response.
  - [x] You'll find an array allFriends, this is where you'll push your new friend to. But first, let's take a look at your friends in the server.
  - [x] Add a new get function with path "allFriends" and send the allFriends variable as a response. <strong>If you make changes to your server, make sure it's not running and then run it again with the <code>node server</code> command.</strong>If you now navigate to <code>localhost:PORT/allFriends</code> you'll get to see all your friends.
  - [x] Remember the url that we left empty? It's time to configure a path to which we'll post our data. Start by changing the url to <code>'http://localhost:PORT/'</code>.
  - [x] Next, make a new post function with path "addFriend". In here, push the request body to the allFriends array.
  - [x] If you now go to your form and add a friend, submit the form, you'll see in your server, localhost:PORT/allFriends, that the friend has been added to the list.
- [x] You've sent data, but now we also want to display the newly updated friend list on your page. To do this, we'll have to make a get request to the server.
  - [x] We want to do this get request in 2 different cases, one is when the page loads and the other is when we post data to the server.
  - [x] First, let's write the function itself and later call the function when we need it. Make a new public async function in the component and pass the url as a parameter. Typehint the parameter and the function. The function will return a Promise of type any. A typehint of a promise with type looks like this: <code>Promise<any></code>.
  - [x] Then, add a fetch to the function and return and await it. The method should be get and the headers should be <code>'Content-Type': 'application/json'</code>.
  - [x] Add a property to your component class called allFriends and in the fetch where you can access the fetched data, assign the value of the data to that property.
  - [x] We now have our fetch working, let's call it when we submit the form first. To do this in the success part of the subscribe, call the function with url 'http://localhost:PORT/allFriends'.
  - [x] To do it on page load, import OnInit. Next your AppComponent class has to implement it.
  - [x] To make something happen on pageload, in the class add <code>ngOnInit(): any { something happens }</code>. In here, call your fetch function like we did previously for the form submit.
  - [x] We now have our friend list updated in the property allFriends of the component class.
  - [x] To check if you have your friends data console log it.
- [x] Now we can display the friends in the template using the property allFriends.
  - [x]  To do this we'll use the ngFor loop, add the following code to a div: <code>*ngFor="let friend of allFriends"</code>.
  - [x] In this div, if you enter {{ friend.email }} for example. You'll see that on your page you'll see all the emails of your friends displayed.
  - [x] Now display all details of your friends, try adding new friends in the process. It updates instantly!
- [x]  You now have all the must-have features. Congratulations! If you have time left, be sure to take a look at the nice-to-have features. Here are some suggestions as well:
- [x] Try removing people from your friend list based on email. Post the email of a friend, find the friend on the server and pop it out of the array.
- [x] Try updating the data from a friend based on email. Same thing, post the email and find that friend, update the values.
- [x] Make separate pages by generating new components! You'll have to look into routing as well!
- [x] Congratulations, you survived the first steps of Angular and Node. I'm proud of you!

---

# Installation Steps

Step 2: Check if you have node.js and npm, if not, install them.
  - node: node -v or node -version
  - npm: npm -v or npm -version
  
Step 3: Install the Angular cli with npm install -g @angular/cli and check afterwards if you have it with ng version

Step 4: Navigate to the root of your clone of this repository in the terminal and enter the command ng new project-name. You should now have 2 folders called "server", your node API, and "project-name", your angular app.

Step 5: Go inside of the "project-name" folder and run the command ng serve --port 4500. You can now check out your angular app on localhost:4500.

# Excercise Steps

Step 7: Empty the "AppComponent" class and the template. The template file should be completely empty. Inside of the AppComponent class you'll write your logic and in the template you can use it and write the html.

Step 8: Make the form in the html file with the needed properties and a regular button.

step 9: We make the *ngFor Loop with the languages array from the component.
```js
// App Component languageArray
export class AppComponent implements onInit {
  languageArray = ['HTML', 'CSS', 'JS', 'PHP', 'KLINGON', 'TYPESCRIPT', 'C++'];
}

//Implement in the component html 
 <option  *ngFor="let language of languageArray; let i = index">
      {{ language }}
    </option>

```

step 10: import the FormsModule into the app.module.ts - then add a #formName="ngForm" Variable - Lastly add #inputName="ngModel" to all of your input tags.
```js
//import the data yes
import { FormsModule  } from '@angular/forms';

//make Html conform 
<form novalidate #friendForm="ngForm"></form>
<input type ="text" placeholder ="First name:" name="firstName" #firstName="ngModel">

```

Step 11: Generate a new class Friend + properties conforming your Form -> Then we can add the following to your inputs [(ngModel)]="friendModel.propertyName" -> add at the top {{ friendModel | json }}
```js
//Make new class with the properties 

export class Friend {
  private _firstName : string | null;
  private _lastName : string | null;
  private _email : string | null;
  private _phoneNumber : number | null;
  private _favouriteLanguage : string | null;

  constructor(firstName : string | null, lastName : string | null, email : string | null, phoneNumber : number | null, favouriteLanguage : string | null) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._favouriteLanguage = favouriteLanguage;
  }
  
  // we add the following to the inputs 
  [(ngModel)]="friend.firstName";
  
  // in the body on top we add 
    {{ friend | json }}

```

Step 12: REGEX is muy importante and make all the input tag INVALID when not filled in or not with the right regex!
```js
//regex pattern for the firstname 
pattern="[a-zA-Z' ]*"

// Make the class.invalid to be required
[class.invalid]="firstName.invalid && firstName.touched"  required><br><br>
        
//Lets make and if statement to check if invalid or not touched.
 <div *ngIf="firstName.invalid && firstName.touched" class="error">Please Fill in your firstName and only use letters!</div>

```

Step 13: 
