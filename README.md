# basketball-gm-player-browser
Utility for viewing Basketball GM JSON roster files.

###Technical Stuff###
This isn't ready for use yet.  I have to build a loader for the JSON file, and I have to write some code to generate unique UID for each player. For some reason the current schema doesn't call for that. If you really want to see what it's like with a fixed lineup go to http://dev.secondrunnerup.com/player

###Working Queries###
Currently you can search by name (using the first name first as the JSON files only have a name field and not a fName lName field).

There are some other things you can search by (you can use >, <, = for inequalties):
'':3pt > n
'':pas > n
'':reb > n

where 'n' is a whole number.

###Todo###
Like everything.

###Annoying Legal Stuff###
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
