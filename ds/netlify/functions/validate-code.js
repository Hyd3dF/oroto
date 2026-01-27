exports.handler = async function (event, context) {
    // Only allow POST
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }

    try {
        const body = JSON.parse(event.body);
        const userCode = body.code;
        const SECRET_CODE = "Tr$80Yj7v26xQk28b";

        if (userCode === SECRET_CODE) {
            return {
                statusCode: 200,
                body: JSON.stringify({ valid: true })
            };
        } else {
            return {
                statusCode: 401,
                body: JSON.stringify({ valid: false, message: "Invalid access code" })
            };
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "Invalid request body" })
        };
    }
};
