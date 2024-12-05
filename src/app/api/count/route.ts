import fs from 'fs';
import path from 'path';

const countFilePath = path.join(process.cwd(), 'public', 'count.json');

export async function GET() {
    try {
        const data = fs.readFileSync(countFilePath, 'utf-8');
        const json = JSON.parse(data);
        return new Response(JSON.stringify(json), { status: 200 });
    } catch (error) {
        return new Response('Failed to read count data', { status: 500 });
        console.log(error);
    }
}

export async function POST(request: Request) {
    try {
        const data = await request.json();
        const currentData = fs.readFileSync(countFilePath, 'utf-8');
        const json = JSON.parse(currentData);
        json.count = data.count;

        // Update the count in the JSON file
        fs.writeFileSync(countFilePath, JSON.stringify(json, null, 2));

        return new Response('Count updated successfully', { status: 200 });
    } catch (error) {
        return new Response('Failed to update count', { status: 500 });
        console.log(error);
    }
}
