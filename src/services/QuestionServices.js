import { firebaseApp, database } from "../firebaseApp";
import { sampleSize, shuffle } from "lodash";
import { getDatabase, ref, get } from "firebase/database";

let cachedQuestions;

/**
 * Transforms a questions object into an array with IDs.
 * @param {Object} questions - The questions object.
 * @returns {Array} An array of questions with IDs.
 */
const transformToArray = (questions) => {
    return Object.keys(questions).map((key) => ({
        id: key,
        ...questions[key],
    }));
};

/**
 * Fetches all questions from the database.
 * @param {string} path - The database path to the questions.
 * @returns {Promise<Array>} A promise that resolves to an array of questions.
 */
const getAllQuestions = async (path) => {
    if (cachedQuestions) {
        return cachedQuestions;
    }

    try {
        const database = getDatabase();
        const questionRef = ref(database, path);
        const snapshot = await get(questionRef);

        if (snapshot.exists()) {
            const questions = transformToArray(snapshot.val());
            cachedQuestions = questions;
            return questions;
        } else {
            throw new Error("No data available");
        }
    } catch (error) {
        // Handle errors (e.g., database retrieval failure)
        console.error("Error fetching questions:", error);
        throw error;
    }
};

/**
 * Retrieves a random set of questions.
 * @param {string} path - The database path to the questions.
 * @param {number} count - The number of random questions to retrieve.
 * @returns {Promise<Array>} A promise that resolves to an array of random questions.
 */
const getRandomQuestions = async (path, count) => {
    try {
        const questions = await getAllQuestions(path);
        const randomQuestions = sampleSize(questions, count);

        return randomQuestions.map((question) => ({
            ...question,
            choices: shuffle(question.choices),
        }));
    } catch (error) {
        // Handle errors
        console.error("Error getting random questions:", error);
        throw error;
    }
};

export { getRandomQuestions };
