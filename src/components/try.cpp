#include <iostream>
using namespace std;

int countMisses(const string& textInput) {
    int miss_count = 0;
    
    for (char character : textInput) {
        // Check if the character is not an English letter, number, or whitespace
        if (!(isalnum(character) || isspace(character))) {
            miss_count++;
        }
    }
    
    return miss_count;
}

int main() {
    string textInput = "aa a234bc@ sad$ hsagd^";
    int misses = countMisses(textInput);
    
    cout << misses << endl; // Output: 3
    
    return 0;
}
