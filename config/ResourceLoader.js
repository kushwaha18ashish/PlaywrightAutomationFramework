const fs = require('fs');
const path = require('path');

class ResourceLoader {
    /**
     * Loads a JSON file from the specified path.
     * @param {string} filePath - The path to the JSON file relative to the project root.
     * @returns {Object} The parsed JSON object.
     */
    static loadJson(filePath) {
        const fullPath = path.resolve(process.cwd(), filePath);
        if (!fs.existsSync(fullPath)) {
            throw new Error(`Resource file not found at: ${fullPath}`);
        }
        try {
            const fileContent = fs.readFileSync(fullPath, 'utf8');
            return JSON.parse(fileContent);
        } catch (error) {
            throw new Error(`Failed to parse JSON file at ${fullPath}: ${error.message}`);
        }
    }
}

module.exports = ResourceLoader;
