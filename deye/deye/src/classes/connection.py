import boto


class Connection(object):

    s3_connection = None

    def __init__(self):
        pass

    def getconnection(self):
        ''' 
            Singleton to avoid making duplicate connections 
            during an execution context.
        '''
        if self.s3_connection == None:
            self.s3_connection = boto.connect_s3()

        return self.s3_connection