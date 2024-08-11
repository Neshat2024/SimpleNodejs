// Name of the environment variable to read
const envVarName = 'MY_ENV_VAR';

// Read the environment variable
const envVarValue = process.env[envVarName];

// Default message if the environment variable is not set
const defaultMessage = 'The environment variable is not set.';

// Print the environment variable value or the default message
if (envVarValue) {
  console.log(`The value of ${envVarName} is: ${envVarValue}`);
} else {
  console.log(defaultMessage);
}
