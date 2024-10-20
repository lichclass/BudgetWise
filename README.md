## About BudgetWise

# Dependencies

- Install first the dependencies to start development

```
npm i
```
```
composer install
```

# Create the .env file

- To create the .env file for local development, copy the .env.example and modify accordingly
- Then, enter this command in the terminal

```
php artisan key:generate
```

# Running the file

```
php artisan serve
```

```
npm run dev
```

## NOTE:

- Commit the files in the TESTING-BRANCH Only using the following format:

- Subject: Main topic of the changes
- Types of Changes:
    - "+" added files
    - "o" modified files
    - "-" removed files

```
<subject>

<type><reason>
```

- Example

```
Added The Landing Page

+ Created 3 new components
- Removed some dependencies
```