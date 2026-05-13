// Question-1
// Generic API Wrapper using TypeScript Generics

interface Album {
    userId: number;
    id: number;
    title: string;
}

async function fetchData<T>(url: string): Promise<T> {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const jsonData = await response.json();
        return jsonData as T;

    } catch (err) {
        console.log("Something went wrong while fetching data");
        throw err;
    }
}

async function loadAlbums(): Promise<void> {
    const albumList = await fetchData<Album[]>(
        "https://jsonplaceholder.typicode.com/albums"
    );

    console.log(albumList);
}

loadAlbums();


// Question-2
// Record Mapping for User Permissions

enum UserRole {
    Admin,
    Editor,
    Guest
}

const accessControl: Record<UserRole, boolean> = {
    [UserRole.Admin]: true,
    [UserRole.Editor]: true,
    [UserRole.Guest]: false
};

console.log(accessControl);


// Question-3
// Exhaustiveness Checking using the never type

type WorkStatus = "Open" | "InProgress" | "Closed" | "Archived";

function processTask(currentStatus: WorkStatus): void {

    switch (currentStatus) {

        case "Open":
            console.log("The task has been created");
            break;

        case "InProgress":
            console.log("The task is currently being worked on");
            break;

        case "Closed":
            console.log("The task has been completed");
            break;

        case "Archived":
            console.log("The task has been moved to archive");
            break;

        default:
            const unreachableState: never = currentStatus;
            console.log(unreachableState);
    }
}

processTask("Open");

// Question-4
// Recursive Navigation Type for Folder Structure

type Directory = {
    name: string;
    files?: string[];
    subFolders?: Directory[];
};

const fileExplorer: Directory = {
    name: "MainFolder",

    files: ["home.html", "app.css"],

    subFolders: [
        {
            name: "Assets",

            files: ["icon.png", "background.jpg"]
        },

        {
            name: "SourceCode",

            subFolders: [
                {
                    name: "TypeScriptProject",

                    files: ["index.ts", "server.ts"]
                }
            ]
        }
    ]
};

console.log(fileExplorer);

//ques-5

// Template Literal Types for CSS Spacing Values

type SpacingUnit =
    `${number}px`
    | `${number}rem`
    | `${number}vh`;

const topMargin: SpacingUnit = "15px";
const sideMargin: SpacingUnit = "3rem";
const sectionHeight: SpacingUnit = "80vh";

console.log(topMargin);
console.log(sideMargin);
console.log(sectionHeight);


//ques-6

// Question-6
// Conditional Types using infer to extract Promise values

type ResolveType<T> =
    T extends Promise<infer DataType>
        ? DataType
        : T;

// Example Types
type TextResult = ResolveType<Promise<string>>;
type ScoreResult = ResolveType<Promise<number>>;
type StatusResult = ResolveType<boolean>;

// Sample Values
const message: TextResult = "TypeScript";
const marks: ScoreResult = 95;
const isAvailable: StatusResult = false;

console.log(message);
console.log(marks);
console.log(isAvailable);


// Question-7
// Union Manipulation using Extract and Exclude

type UserActions =
    | "click"
    | "dbclick"
    | "submit"
    | "reset"
    | "keypress";

// Extracting only mouse-related actions
type PointerEvents = Extract<
    UserActions,
    "click" | "dbclick"
>;

// Removing form-related actions
type RemainingEvents = Exclude<
    UserActions,
    "submit" | "reset"
>;

// Sample Values
const mouseAction1: PointerEvents = "click";
const mouseAction2: PointerEvents = "dbclick";

const action1: RemainingEvents = "keypress";
const action2: RemainingEvents = "click";

console.log(mouseAction1);
console.log(mouseAction2);
console.log(action1);
console.log(action2);