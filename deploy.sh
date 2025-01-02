
# Load the env from a file
load_env() {
  set -a
  [ -f "$1" ] && . "$1"
  set +a
}


# Build both iOS and Android

build_for_env() {
  local env_file="$1"
  local profile="$2"

  echo "Building for $env_file"
  load_env "$env_file"

  eas build --profile "$profile" --local
}

echo "Select the project to build"
echo "1) Customer 1"
echo "2) Customer 2"
read -p "Enter the number of the project: " customer_number

case $customer_number in
  1) build_for_env ".env.customer1.dev" "customer-1-dev";;
  2) build_for_env ".env.customer2.dev" "customer-2-dev";;
esac
