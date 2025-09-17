// API Endpoint: https://jsonplaceholder.typicode.com/posts

async function getAllUsersData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await response.json();
  return data;
}

// let responseData = await getAllUsersData()
// console.log(responseData)


// Question 1: Fetch all posts where the userId is greater than a given number.
                async function getGreaterUserIdData(userId) {
                    let getData = await  getAllUsersData()
                    let greaterUserIdData = []
                    for(let i=0; i<getData.length; i++){
                        if(getData[i].userId>userId){
                           greaterUserIdData.push(getData[i])                                                                                  }
                    } return greaterUserIdData;
                }
                // let greaterUserIdData = await getGreaterUserIdData(9)
                //  console.log(greaterUserIdData)

// Question 2: Return all posts where the title contains the word "labore" (case insensitive).
                async function returnAllPostTitle() {
                    let getDataForTitle = await  getAllUsersData()
                    let pushTitleData= []
                    for(let i=0; i<getDataForTitle.length; i++){
                        if(getDataForTitle[i].title == labore.tolocalLowerCase()){
                            pushTitleData.push(getDataForTitle[i].title)
                        }
                    }return pushTitleData;
                }
                // let getAllTitleWhichContainsLaboreWord = await returnAllPostTitle()
                // console.log(getAllTitleWhichContainsLaboreWord)

// Question 3: Fetch all posts, and return the total count of posts by a given userId.
                async function getTotalCountOfPosts(userId) {
                let getDataForPosts = await  getAllUsersData()
                let countNumbersOfPosts = 0;
                for(let i = 0 ; i < getDataForPosts.length ; i++ ){
                    if( getDataForPosts[i].userId == userId ){
                        countNumbersOfPosts++;
                    }
                }return countNumbersOfPosts;
                }
                // let totalCOuntOfPosts = await getTotalCountOfPosts(10)
                // console.log('totalCOuntOfPosts: ',totalCOuntOfPosts)


// Question 4: Find and return the post with the longest body content.(not correct)
                async function findAndreturnLongestBodyContent() {
                    let dataForBodyContent = await  getAllUsersData()
                    let longContentlength = 0 ; 
                    
                    for( let i = 0 ; i < dataForBodyContent.length ; i++ ){
                        let bodyContent = dataForBodyContent[i].body.length;
                        if( bodyContent > longContentlength ){
                            longContentlength = dataForBodyContent[i];
                        }
                    }  return longContentlength;

                }
                // let getLongestBodyContent = await findAndreturnLongestBodyContent()
                // console.log(getLongestBodyContent)


// Question 5: Return the post with the smallest title length.
                    async function returnSmallestTitleOfLength() {
                        let dataForSmallTitle =  await  getAllUsersData()
                        let minlengthOfTitle = Number.MIN_SAFE_INTEGER;
                        for (let i = 0; i<dataForSmallTitle.length ; i++){
                            let titleLength = dataForSmallTitle[i].title.length;
                            if(titleLength > minlengthOfTitle){

                            }
                        }
                    }
// Question 6: Fetch all posts with an id between two specific numbers (e.g., between 10 and 20).
                        async function fetchSpecificNumData(id1 , id2) {
                            let dataForSpecificNum = await  getAllUsersData()
                            let getPushData = []
                            for(let i = 0 ; i<dataForSpecificNum.length ; i++){
                                if(dataForSpecificNum[i].id >= id1 && dataForSpecificNum[i].id <= id2){
                                    getPushData.push(dataForSpecificNum[i])
                                }
                            }return getPushData;
                        }
                        // let getSpecificNumData  = await fetchSpecificNumData(10,20)
                        // console.log(getSpecificNumData)


// Question 7: Fetch posts where the body contains the phrase "qui officia" (case insensitive).



// Question 8: Take an id, and return an object with the post's id, userId, and a new key postStatus (set to "active").
                        async function AddNewKeyPostStatus(id) {
                            let dataForPostStatus = await  getAllUsersData()
                            for(let i = 0; i<dataForPostStatus.length; i++){
                                if(dataForPostStatus[i].id == id){
                                    dataForPostStatus[i].postStatus = "active";
                                    return dataForPostStatus[i];
                                }
                            }
                        }
                        // let getPostStatusData = await AddNewKeyPostStatus(20)
                        // console.log(getPostStatusData)

                        /** output: {
  userId: 2,
  id: 20,
  title: 'doloribus ad provident suscipit at',
  body: 'qui consequuntur ducimus possimus quisquam amet similique\n' +
    'suscipit porro ipsam amet\n' +
    'eos veritatis officiis exercitationem vel fugit aut necessitatibus totam\n' +
    'omnis rerum consequatur expedita quidem cumque explicabo',
  postStatus: 'active'
}
 */



// Question 9: For a given userId, return the titles of all the posts written by the user.
                        async function returnAllTitlePostWrittenByUser(userId) {
                            let dataForReturnAllTitle =  await  getAllUsersData()
                            let empArr = []
                            for(let i = 0; i<dataForReturnAllTitle.length; i++){
                                if(dataForReturnAllTitle[i].userId == userId){
                                    empArr.push(dataForReturnAllTitle[i].title)
                                }
                            }return empArr;
                        }
                        // let getAllTitleData = await returnAllTitlePostWrittenByUser(2)
                        // console.log(getAllTitleData)

                        /** output:
                         * [
  'et ea vero quia laudantium autem',
  'in quibusdam tempore odit est dolorem',
  'dolorum ut in voluptas mollitia et saepe quo animi',
  'voluptatem eligendi optio',
  'eveniet quod temporibus',
  'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
  'fugit voluptas sed molestias voluptatem provident',
  'voluptate et itaque vero tempora molestiae',
  'adipisci placeat illum aut reiciendis qui',
  'doloribus ad provident suscipit at'
]
                     */



// Question 10: Given a userId, return the first post that was created by that user, based on the id (smallest id).
                        async function returnFirstPost(userId) {
                            let dataForFirstPost = await getAllUsersData()
                            for(let i = 0; i<dataForFirstPost.length; i++){
                                if(dataForFirstPost[i].userId === userId){
                                        return dataForFirstPost[i]                               
                                }
                            }
                        }
                        let getFirstPostData = await returnFirstPost(2)
                        console.log(getFirstPostData)

                        /** output:
                         * {
  userId: 2,
  id: 11,
  title: 'et ea vero quia laudantium autem',
  body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\n' +
    'accusamus in eum beatae sit\n' +
    'vel qui neque voluptates ut commodi qui incidunt\n' +
    'ut animi commodi'
}

                         */