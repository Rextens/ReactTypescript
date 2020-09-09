import axios from 'axios'
import GithubWrapper from './GithubWrapper'
const validJSON = require('./return.json') // wczytanie JSONA'a

jest.mock('axios') //Pokazujemy jestowi jaką bibliotekę chcemy mockować

describe('check filter', () => {
    it('what happen when return is proper', async () => {  //Testujemy kod asynchroniczny, więc wpisujemy 'async'
        const mockedAxios = axios as jest.Mocked<typeof axios>; //Stworzenie instancji Axiosa do mockowania

        mockedAxios.create = jest.fn(() => mockedAxios) //Mocknięcie(wstrzyknięcie kodu/zmuszenie go by zachował się inaczej) create, bez tego, create będzie undefined

        mockedAxios.get.mockImplementationOnce(() => { //Mocknięcie funkcji "get". Od teraz będzie ona zwracać wczytanego wcześniej JSON'a
            return Promise.resolve(validJSON);
        }) 

        let githubWrapper: GithubWrapper = new GithubWrapper();

        const result = await githubWrapper.filter('Rextens', 'ddd'); 

        expect(result).toStrictEqual([{"description": "ddd"}]) //toStrictEqual od toBe różni się tym, że toBe porównuje wartości a toStrictEqual jedynie strukturę. 
                                                                //Czyli jeżeli mamy np. obiekt {"description": "ddd"} i obiekt {"description": "ddd"}, które mają przypisane inne typy
                                                                //np. 1 obiekt zostaną przez jesta uproszczone do stringów a drugi obiekt to JSON, to toBe pokaże, że test nie przeszedł
                                                                //w przeciwieństwie do toStrichEqueal
    })

    it('what happen when return is wrong', async () => {
        const mockedAxios = axios as jest.Mocked<typeof axios>;

        mockedAxios.create = jest.fn(() => mockedAxios)

        mockedAxios.get.mockImplementationOnce(() => { 
            return Promise.reject({                        //Tutaj sztucznie stworzyłem sobie JSON'a. Jak widać obietnica(Promise) zostaje odrzucona, wiec promis wykona catch zamiast 
                "descripion": "description",                //then
                "public": "true",
                "files": {
                    "cars": {
                    "content": "textContent"
                    }
                },
                "data": [{
                    "description": "ddd"
                }, {
                    "description": "textContent2"
                }]
            });
        })

        let githubWrapper: GithubWrapper = new GithubWrapper();
        
        const result = await githubWrapper.filter('Rextens', 'ddd');
        
        expect(result).toBe("found error, check username") //Tutaj używamy toBe, bo porównujemy teksty. Tekst który tutaj widzimy zostanie zwrócony zamiast obiektu w przypadku
                                                            //gdy funkcja używana do pobierania obiektów z githuba wykona catch zamiast then(Dlatego mamy wyżej reject)
    })
})