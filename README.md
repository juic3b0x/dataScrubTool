# Motorola get_unlock_data Scrubber
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fjuic3b0x%2Fbootloader-scrubber.git)

Welcome to the Motorola get_unlock_data Scrubber project! This project provides a tool that scrubs data output from the command `fastboot oem get_unlock_data` for Motorola bootloader unlocking. It removes unwanted prefixes and whitespace, and concatenates all lines into a single line for ease of use.

## Features

- Removes unwanted prefixes like `(bootloader)` and `Unlockdata:` from the input data.
- Removes all whitespace and concatenates all lines into one line.
- Provides a user-friendly interface with a text area for input data and a button to submit the data.
- Displays the scrubbed output in a readable text area.
- Includes a copy button to copy the scrubbed output data to the clipboard.
- Utilizes Tailwind CSS for styling.
- Built with Next.js and deployed on Vercel.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/juic3b0x/bootloader-scrubber.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd bootloader-scrubber
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm run dev
    ```

5. Access the application in your web browser at `http://localhost:3000`.

## Deployment

This project is deployed on Vercel. To deploy your own version:

1. Create an account on [Vercel](https://vercel.com/).
2. Connect your GitHub account and import the project repository.
3. Configure your project and deploy.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel Analytics](https://vercel.com/analytics)
- [React](https://react.dev/)

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions or issues with the project, feel free to open an issue on the [GitHub repository](https://github.com/juic3b0x/bootloader-scrubber) or contact the project maintainers.

Thank you for using the Motorola get_unlock_data Scrubber!
