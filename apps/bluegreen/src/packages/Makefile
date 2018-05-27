all: dist

clean:
	rm -f FProxy.tar.gz

dist: clean
	echo "Creating a distributable tar.gz..."
	cd FProxy/ && tar -zcvf FProxy.tar.gz * && cp FProxy.tar.gz ../ && rm -Rf FProxy.tar.gz && cd ..
